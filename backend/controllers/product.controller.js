const Product = require('../models/product.model');
const mongoose = require('mongoose');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res, next) {

    console.log(req.body);
    let product = new Product(
        {
            _id : new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price,
            category : req.body.category,
            image : req.body.image,
            description : req.body.description,
            rating : req.body.rating
        }
    );

    product.save().then(result =>{
        console.log(result);
        res.status(201).json({
        message : "Product Created Successfully",
        createdProduct: {
            name : result.name,
            price : result.price,
            category : result.category,
            image : result.image,
            description : result.description,
            rating : result.rating,
            _id : result._id,
            request :{
                type : 'GET',
                url: "http://localhost:2345/products/" + result._id
            }
        }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    
};

exports.product_details = function (req, res, next) {
    const id = req.params.id;
    Product.findById(id).select('_id name price category image description rating').exec().then(doc => {
        console.log(doc);
        if (doc){
            res.status(200).json(doc);
        }else {
            res.status(404).json({ message : "No valid entry found for the given ID."});
        } 
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
    
};

exports.product_update = function (req, res, next) {
    const id = req.params.id;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Product.update({_id : id}, {$set : updateOps}).exec().then(result =>{
        res.status(200).json({
            message : "Product updated",
            request :{
                type : 'GET',
                url: "http://localhost:2345/products/" + id
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
};

exports.product_delete = function (req, res, next) {
    const id = req.params.id;
    Product.remove({_id:id}).exec().then(result =>{
        res.status(200).json({
            message : "Product deleted"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
};

exports.product_find = function (req, res, next){
    Product.find().select('_id name price category image description rating').exec().then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
};

exports.product_search = function (req, res, next){
    Product.find({
        $text : {
            $search : req.body.query
        }
    }).select('_id name price category image description rating').exec().then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
};


exports.rating_update = function (req, res, next){

    const id = req.params.id;
    let updateOps = {};
    Product.findById(id).select('rating').exec().then(doc => {
        //console.log(req.body.ratings);
        //console.log(req.params.id);
        if (doc){
            let rating = 0;
            if(req.body.ratings == null)
            {

                rating = doc.rating;


            }
            else if(doc.rating == 0)
            {

                rating  = Number(req.body.ratings);
            }
            else
            {
                rating  = (Number(req.body.ratings) + doc.rating)/2;
            }
            //console.log(req.body.ratings);
            //console.log(req.body);

            updateOps['rating'] = rating;
            Product.updateOne({_id : id}, {$set : updateOps}).exec().then(result =>{
                res.status(200).json({
                    message : "Product updated",
                    request :{
                        type : 'GET',
                        url: "http://localhost:2345/products/" + id
                    }
                });
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });

            console.log(updateOps['rating']);

            //res.status(200).json({ message : rating});
        }else {
            res.status(404).json({ message : "No valid entry found for the given ID."});
        }

    })
        .catch(err => {
            console.log(err);
            res.status(500).json({error:err});
        });

};
