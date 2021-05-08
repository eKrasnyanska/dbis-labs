import csv
import logging
import time

from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError
from retrying import retry


@retry(wait_exponential_max=30, )
def insert_data_from_csv_to_db(file_name: str, year: int, students) -> None:
    print("starting mongoDB ingestion")
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

            columns[0] = "_id"
            row.append(year)
            student = dict(zip(columns, row))
            try:
                student_id = students.insert_one(student).inserted_id
                if not counter % 100000:
                    print(student_id, counter)
            except DuplicateKeyError as e:
                if not counter % 10:
                    print(f"This student is already been here (_id duplication) counter = {counter}")


def prepare_report(db, filename):
    pipeline = [
        {"$match": {"UkrTestStatus":
                        "Зараховано"}},
        {"$group": {"_id": {"region": "$REGNAME", "zno_year": "$added_zno_year"},
                    "min": {"$min": "$UkrBall"}}}]

    results = list(db.students.aggregate(pipeline))
    with open(f'{filename}.csv', 'w') as write_csv:
        csv_out = csv.writer(write_csv)
        csv_out.writerow(['region', 'year', 'ball'])
        for row in results:
            line = []
            line.append(row['_id']['region'])
            line.append(row['_id']['zno_year'])
            line.append(row['min'])
            csv_out.writerow(line)


if __name__ == "__main__":
    filenames = ["zno_results_2019.csv", "zno_results_2020.csv"]
    years = [2019, 2020]

    client = MongoClient(host='localhost',
                         port=27017,
                         username='root',
                         password='rootpassword')
    db = client['test-database']
    collection = db.test_collection
    students = db.students

    for filename, year in zip(filenames, years):
        start = time.time()
        insert_data_from_csv_to_db(filename, year, students)

        print(f"Took {time.time() - start} seconds to finish the task")

    prepare_report(db, "report")
