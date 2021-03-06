# Laba 1 Yelizaveta Krasnyanskaya

## Preconditions:

1. Stop Postgres server on port 5432 (You can start server on different port) or change ports for "db" service in docker-compose.yaml
2. Check that Docker daemon is running. If not than start
3. Copy files "Odata2019File.csv", "Odata2020File.csv" to the folder with "main.py" script
4. Create and activate virtual environment
5. Run "pip3 install -r dev.requirments.txt"

## Start script:

1. Run "docker-compose up" and wait until pgAdmin and Postgres server will launch
2. Then execute "python3 main.py"
3. Wait until script will finish its execution with return code "0"
4. Find "lab_results.csv" <- Lab Assignment

   and "logging.txt"     <- Benchmarks


## Help

If you experience difficulties running the script or configuring an environment, please do not hesitate to notify me !
 
## Retry

For retrying mechanism was used python library retrying that waits some random time (max 3 seconds)
and then retries execution

You can test fault tolerance of the ingestion by stopping and then rerunning Postgres Server during the execution
of the script. Retrying mechanism will restart the script. 
