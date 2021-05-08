# Laba 4 Yelizaveta Krasnyanskaya

## Preconditions:

1. Stop Mongo server on port 27017 (You can start server on different port) or change ports for "db" service in docker-compose.yaml
2. Check that Docker daemon is running. If not than start
3. Copy files "zno_results_2019.csv", "zno_results_2020.csv" to the folder with "mongo_ingestion.py" script
4. Create and activate virtual environment
5. Run "pip3 install pymongo retrying"

## Start script:

1. Run "docker-compose up" and wait until Mongo server will launch
2. Then execute "python3 mongo_ingestion.py"
3. Wait until script will finish its execution with return code "0"
4. Find "report.csv" <- Lab Assignment
  
  P.S.
  There is also a file called benchmark.txt with as you can understand benchmarks(!!!)

## Help

If you experience difficulties running the script or configuring an environment, please do not hesitate to notify me !
 
## Retry

For retrying mechanism was used python library retrying that waits some random time (max 30 seconds)
and then retries execution

You can test fault tolerance of the ingestion by stopping and then rerunning Mongo Server during the execution
of the script. Retrying mechanism will restart the script. 

Steps to imitate the fault:
1. `docker-compose up`
2. `python3 mongo_ingestion.py`
3. And look at the logs - ingestion will start
4. now imitate the crush --->  `docker-compose down`
5. look at the logs ---> `starting mongoDB ingestion` will appear in logs before your laptop will be destroyed by Thanos
or before you start mongo server with `docker-compose up`
6. Yessir, here we go, ingestion is going again

## Legend
"Порівняти найгірший бал з Української мови та літератури у кожному регіоні у 2020 та 2019 роках серед тих кому було зараховано тест"
