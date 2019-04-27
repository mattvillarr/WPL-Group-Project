/* This is the Express file aka the E in MEAN*/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const product = require('./routes/product.route'); 
const order = require('./routes/order.route');
const user = require('./routes/user.route');
const app = express();

app.use(cors());

let port = 2345;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

const mongoose = require('mongoose');
const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'test';      // REPLACE WITH YOUR DB NAME
class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}
module.exports = new Database()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/orders', order);
app.use('/users', user);

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