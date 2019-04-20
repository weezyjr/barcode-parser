# Barcode

Barcode is an app used to create, edit and delete barcode formats and parse the barcodes using these formats.

## How it works

the user creates a barcode format formed of the barcode's GTIN start/end index, Serial start/end index, and expiry date indicies if it exist

the parse function, parses the GTIN, Serial and expiry date out of any barcode based on the created formats

### Format Layout

![barcode](https://i.imgur.com/UU9K2AN.png)

## Backend

a stack of express as a framework for Node.js, sequalize as promise-based ORM for the database

Postman documentation :

[POSTMAN](https://documenter.getpostman.com/view/2667398/S1ETRGcm)

Postman Collection : 

[Collection](https://drive.google.com/file/d/1tJ6ZgQ2XA-N4ZnQxOaUHYFkOGDM7eGB0/view?usp=drive_web)


### Run backend server for first time

you have to create a database called Barcode, 
run the following command lines

` mysql `

` CREATE DATABASE Barcode; `

now you need to install the dependencies

` cd api `

` npm i `

### run backend server

` node app `

### run tests

` npm run test `

### backend production


#### create and edit .env file

` nano .env`

#### config .env file

Add the following configurations:

`SERVER=` your backend server url (e.g. example.com)

`PORT=` port (e.g. 3000)

`DB_DIALECT=mysql`

`DB_HOST=` your database url (e.g. example.com)

`DB_PORT=` your database port (default is 3306)

`DB_USER=` your database username (e.g. root)

`DB_PASS=` your databse password

`DB_NAME=Barcode`


## Database

Mysql database named Barcode, it has 1 table called formats, where user can store new formats.

![database](https://i.imgur.com/OnS2TXx.png)

## Front-end

the front-end is one page, to create new formats

used a stack of angular as web framework, bootstrap as styling framework

### run the front-end

run the following commands: 

` cd frontend `

` npm i `

` ng serve `


### run tests

` ng test `

### deploy the front-end

edit `environment.prod.ts` file as the following

`apiHost: http://YOUR_BACKEND_URL:PORT/api/v1/` e.g. http://localhost:3000/api/v1/

run the following command to build

` ng build --prod `
