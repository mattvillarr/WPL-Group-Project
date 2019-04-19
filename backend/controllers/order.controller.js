const Order = require('../models/order.model');
const Product = require('../models/product.model');
const mongoose = require('mongoose');

exports.order_create = function (req, res, next){
    Product.findById(req.body.productId).then(product => {
        if(!product){
            return res.status(404).json({
                message : 'Product Not Found'
            });
        }
        const order = new Order ({
            _id : mongoose.Types.ObjectId(),
            quantity : req.body.quantity,
            user : req.body.userId,
            product: req.body.productId
        });
        return order.save()      
    })
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Order Stored',
            createdOrder:{
                _id : result._id,
                user : result.user,
                product: result.product,
                quantity : result.quantity
            },
            request: {
                type: 'GET',
                url: "http://localhost:2345/orders/" + result._id
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
};

exports.order_find = function (req, res, next){
    Order.find().select('product quantity _id').exec().then(docs => {
        res.status(200).json({
            count : docs.length,
            orders: docs.map(doc => {
                return {
                    _id : doc._id,
                    user : doc.user,
                    product: doc.product,
                    quantity : doc.quantity,
                    request: {
                        type: 'GET',
                        url: "http://localhost:2345/orders/" + doc._id
                    }
                }
            })
           
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
};

exports.order_details = function (req, res, next) {
    Order.findById(req.params.orderId).exec().then(order => {
        res.status(200).json({
            order:order,
            request : {
                type: 'POST',
                url : "http://localhost:2345/orders/find"
            }
        });
    })
    .catch(err => {
        res.status(500).json({
            error : err
        });
    });
};

exports.order_delete = function (req, res, next) {
    Order.remove({ _id : req.params,orderid}).exec().then(result => {
        res.status(200).json({
            message: 'Order deleted'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
} 