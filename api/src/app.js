/**
 * MODESO
 * Barcode Api V1
 * Author: Ahmed Adel
 */


// npm modules
const express = require('express');
const dotenv = require('dotenv');
const parseError = require('parse-error');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./model/db.connection');


// use the dotenv variables
dotenv.config();

// set up the express server and port
const app = express();
const port = process.env.PORT || 3000;



//**  Middlewares  **//

// to extraxt JSON body portion of an incoming request
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// allow cors headers
app.use(cors())


//**  Routes  **//

// API routes
app.use('/api/v1', require('./routes'));


// helth check
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'barcode api is running',
    });
});



//**  Error Handling  **//

// handle 404 errors
app.use((req, res, next) => {
    res.status(400).json({
        status: 'error',
        message: `bad request on route ${req.url}`
    })
});

// handle server errors
app.use((err, req, res, next) => {
    // get the error message from the parsed
    // error object if exist or respond with 
    // something went wrong
    const message = parseError(err).message ||
        'something went wrong';

    res.status(500).json({
        status: 'error',
        message
    });
})


// emitted whenever a Promise has been rejected and wasn't catched
process.on('unhandledRejection', (err) => {
    console.error('Uncaught Error', parseError(err));
});


// run the server on the selected port
app.listen(port, () => {
    console.log('Up and running on port ', port);
    // create the database tables if it doesn't exist
    db.sync({ force: false });
});

