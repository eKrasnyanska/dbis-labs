import csv
from typing import Dict


def get_schema(file_name: str = "") -> Dict[str, str]:
    with open(file_name, encoding='Windows-1251') as csv_file:
        data = csv.reader(csv_file, delimiter=';')
        numerical_columns = ["Birth", "UkrAdaptScale"]
        columns = next(data)
        len(columns)
        columns_types = {}
        for col in columns:
            if "Ball" in col:
                columns_types[col] = "INT"

            elif col in numerical_columns:
                columns_types[col] = "INT"

            else:
                columns_types[col] = "VARCHAR"
        columns_types["added_zno_year"] = "INT"
    return columns_types


def generate_create_table_query(table_name: str, schema: dict = None) -> str:
    query = f"""
    CREATE TABLE IF NOT EXISTS {table_name} ( 
        outid VARCHAR PRIMARY KEY {", ".join((f"{column} {schema[column]}" if "OUTID" not in column else ""
                                              for column in schema))}
    );
    """
    return query


def generate_primary_key(table_name: str, column: str = "") -> str:
    query = f"""
    ALTER TABLE {table_name}
     ADD PRIMARY KEY ({column});;
    """
    return query


def generate_merge_query(original_table: str, temp_table: str, schema: dict) -> str:
    merge_query = f"""
    INSERT INTO {original_table} ({", ".join((f"{column}" for column in schema))})
        SELECT {", ".join((f"src.{column}" for column in schema))}
        FROM {temp_table} src
        ON CONFLICT(outid) 
        DO NOTHING;
    """
    return merge_query


def generate_cleanup_query(table_name: str) -> str:
    cleanup_query = f"""
    DROP TABLE {table_name}
    """
    return cleanup_query