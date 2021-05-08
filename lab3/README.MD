# Lab 3 ShopFinder Yelizaveta Krasnyanskaya

The ShopFinder is deployed to the Heroku and can be accessed by you **NOW!!!**
Don't miss the chance to open it!
P.S. Take some time for the sever to generate you malls and shops 10-15 seconds for the first time
(I was using US servers, so it takes some time)
http://shopfinderrr.herokuapp.com/

## Preface

In ShopFinder you can add shops to malls and create malls separately from shops.
When you are adding the new shop mind that all shops(Adidas, Nike...) are unique and only one shop from the same can be in the mall
(Adidas can be one and the only one in the Gulliver but you can add Adidas to SkyMall for example)
Also, when you're adding a shop with already edited fields of Malls then your edits won't be applied
Example:
1) Add Skymall in Desnyanskiy
2) Add Adidas in Skymall in Obolon <---- sorry but it is create operation we will Add Adidas to SkyMall but won't change 
the district!
   
But you can actually Update the disctrict then on /malls or on /shops pages

## Stack:

* Front-end
   1) vue.js
   2) html + css
   3) node.js + express.js (for running front-end on heroku)

* Back-end
   1) flask (python)
   2) sqlalchemy (orm)
   3) alembic (migrations)

## Architecture:

Micro Fronted https://itnext.io/setup-a-micro-frontend-architecture-with-vue-and-single-spa-2c89528bf72f

The Whole Business Logic is implemented on flask back-end using sqlalchemy

### Workflow:
  1) User opens http://shopfinderrr.herokuapp.com/      ------- express.js server returns the page
  2) User opens http://shopfinderrr.herokuapp.com/malls ------- express.js server returns the page and asks flask server
to provide needed data (malls in this case)
  3) User opens http://shopfinderrr.herokuapp.com/shops ------- express.js server returns the page and asks flask server 
     to provide needed data (shops in this case)
     
So, flask for DB operations and client for generating UI components

### Relations:
  Shops (Name, Type, Malls) many <------> many Malls (Name, City, District, Shops)
  There can be **many** shops(Adidas, Moyo, Apple) in one mall.
  At the same time there can be a lot of shops of one brand in different malls

## Deployment strategy

For the deployment needs there were taken 2 **Heroku app** instances. For back-end and front-end correspondingly
I did not use any github hooks to simplify switching between the back and front (both of them in one git repo for the sake of simplicity)

### Front-end instance
  Front-end instance is using **node.js** buildtools for the deployment. Thus, package.json must be provided
There is the whole internet of packages(thanks npm) but you should pay attention on the
  `"scripts": {
  "start": "node server.js",
  "build": "npm install"
  }`
**start** is then used in Procfile that is used to start the server during the Heroku building process
**build** is used to install all the npm needed packages to start server.js file (express.js server)

You may ask what server.js will return on request if nothing was build?!
But hold down, I build locally the front-end using the webpack+babel and then create a dist folder then will be deployed 
then to the Heroku. 
Sure, maybe it is better to generate build on the Heroku site accordingly to the CI/CD principles. for running the express.js 
I need to install only express.js but for the building the front-end I need the whole internet to be installed on the instance
(deploying time was decreased from 10 minutes to 2, sorry but this move simplifies debugging a lot)

Steps:
 - creating compiled with babel and webpack dist folder locally on my prepared setup
 - update repo and run `git push heroku master` 
 - npm installs all the needed packages
 - server.js file starts (express.js server)
 - enjoy the show

### Back-end

Very important notice about the back-end is that it is required to create another resource in the Heroku - Heroku Postgres
Then the creds from the Heroku Postgres will be used in the config.py file. But sure it is a bad approach and better handle
all the credentials using secret manager https://aws.amazon.com/secrets-manager/
It was very attractive to use python poetry build tool to create a package but decided to use the standard workflow
 - setup Procfile to `web: gunicorn server.main:app` 
 - `git push heroku master`
 - And now wait before pip installs all the packages and then starts the back-end server
 - enjoy how the back-end works

## Files to pay attention for DB lecturer:
Let's skip front-end files - true warriors are working in server side

**app.py** - it is all about configuring flask app (db, manager,CORS, etc.)

**manager.py** - used to run the migrations using the manager from app.py
usage in DB stuff:
1) `python3 manager.py db init`
2) `python3 manager.py db migrate`
3) `python3 manager.py db upgrade`

steps 2-3 can be repeated a few times. This is very important because my DB has 4 versions
   
**config.py**  - trivial, configuration for the flask app
   
**models.py**  - creating DB classes snf relations using sqlalchemy

**routes.py**  - mapping for the front-end request to the server

**main.py**    - this is tho start the server(app.run())

**main.tf**    - I am kidding - there is no terraform in this lab

## Help

If you experience difficulties running the script or configuring an environment, please notify me !

## Start locally

Basically you can test back and front separately for debugging 

### Back-end:
1. Do migrations stuff
2. Run  python server/main.py

### Front-end
1. cd client; npm install
2. npm run dev