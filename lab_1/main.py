import csv
import logging
import time

import psycopg2
from retrying import retry

from utils.query_generator import (get_schema,
                                   generate_create_table_query,
                                   generate_merge_query,
                                   generate_cleanup_query)

logging.basicConfig(filename="logging.txt",
                    filemode='a',
                    format='%(asctime)s,%(msecs)d %(name)s %(levelname)s %(message)s',
                    datefmt='%H:%M:%S',
                    level=logging.INFO)


def postgres_db_hook(host: str = "localhost",
                     dbname: str = "postgres",
                     user: str = "postgres",
                     password: str = "postgres",
                     port: int = 5432) -> tuple:
    connection = psycopg2.connect(host=host,
                                  port=port,
                                  user=user,
                                  password=password,
                                  database=dbname)
    cursor = connection.cursor()
    return cursor, connection


# @retry(wait_exponential_max=3)
def insert_data_from_csv_to_db(cursor, connection,
                               year: int, file_name: str = "", table_name: str = "") -> None:
    # cursor, connection = postgres_db_hook()
    with open(file_name, encoding='Windows-1251') as csv_file:
        numerical_columns = ["Birth", "UkrAdaptScale"]
        columns = csv.DictReader(csv_file, delimiter=';').fieldnames
        columns.append("added_zno_year")

        next(csv_file)
        data_csv = csv.reader(csv_file, delimiter=';')
        for counter, row in enumerate(data_csv):
            for col, element in zip(columns, enumerate(row)):
                if "Ball" in col:
                    try:
                        row[element[0]] = int(float(element[1].replace(",", ".")))
                    except ValueError:
                        logging.debug(f"null value encountered for id = {row[0]}")
                if col in numerical_columns:
                    row[element[0]] = int(element[1])

            for index, element in enumerate(row):
                if isinstance(element, str) and '"' in element:
                    row[index] = element.replace('"', '`')
                if isinstance(element, str) and "'" in element:
                    row[index] = element.replace("'", '`')
            # if counter == 2:
            #     break

            insert_query = f"""
            INSERT INTO {table_name} ({", ".join((f"{column}" for column in columns))})
            VALUES ({", ".join((f"'{column}'" if isinstance(column, str) and 'null' not in column else f"{column}"
                                for column in row))}, {year});
            """
            try:
                cursor.execute(insert_query)
                print(f"Already processed {counter}")
            except psycopg2.errors.UniqueViolation as e:
                print(f"{e} occurred, skip this row ")
                continue

    connection.commit()


@retry(wait_exponential_max=3)
def main(table_name: str, file_csv: str, year: int) -> None:
    cursor, connection = postgres_db_hook()
    schema = get_schema(file_csv)
    temp_table_name = f"{table_name}_temp"

    create_table_query = generate_create_table_query(table_name, schema)
    cursor.execute(create_table_query)
    create_temp_table_query = generate_create_table_query(temp_table_name, schema)
    cursor.execute(create_temp_table_query)
    connection.commit()

    start = time.time()
    insert_data_from_csv_to_db(cursor=cursor,
                               connection=connection,
                               file_name=file_csv,
                               table_name=temp_table_name,
                               year=year)

    logging.info(f"Took {time.time() - start} to load data to temp table(for year = {year})")

    merge_start = time.time()
    merge_query = generate_merge_query(table_name, temp_table_name, schema)
    cursor.execute(merge_query)
    connection.commit()
    logging.info(f"Took {time.time() - merge_start} to merge queries(for year = {year})")

    cleanup_query = generate_cleanup_query(temp_table_name)
    cursor.execute(cleanup_query)
    connection.commit()

    connection.close()


def write_results_to_csv(cursor, connection, filename: str) -> None:
    query = """
    SELECT regname, added_zno_year, MIN(ukrball) FROM zno_results
        WHERE "ukrteststatus" = 'Зараховано'
        GROUP BY regname, added_zno_year;
    """
    cursor.execute(query)
    connection.commit()
    ukr_zno_results = cursor.fetchall()

    with open(f'{filename}.csv', 'w') as write_csv:
        csv_out = csv.writer(write_csv)
        csv_out.writerow(['region', 'year', 'ball'])
        for row in ukr_zno_results:
            csv_out.writerow(row)


if __name__ == '__main__':
    main_start = time.time()

    zno_years = [2019, 2020]
    files = ["Odata2019File.csv", "Odata2020File.csv"]
    for zno_year, file in zip(zno_years, files):
        main("zno_results", file, zno_year)

    res_cursor, res_connection = postgres_db_hook()
    write_results_to_csv(res_cursor, res_connection, "lab_results")

    logging.info(f"Took {time.time() - main_start} to execute whole ingestion process")
