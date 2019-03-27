/* This is the Express file aka the E in MEAN*/
const express = require('express');
const app = express();

/* Allows access to API*/
app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, UPDATE, DELETE, OPTIONS"
    );
    next();
});

app.use((req, res, next) => {
    console.log('first middleware from express');
    // call next app.use
    next();
});

app.use((req, res, next) => {
    res.send('this message was sent from express.js!');
    next();
});

/* This is an example for how to write an api call 
app.use('/api/dummyCall', (req, res, next) => {
    const dummyData = [
        {
            title: "ljadfa",
            price: 123.00
        }
    ];
    res.status(200).json({
        message: 'fetched sucessfully',
        dummyCall : dummyData
    });
});
*/
module.exports = app;