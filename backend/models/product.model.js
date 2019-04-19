const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    price: {type: Number, required: true},
    category : {type : String},
    image : {type : String},
    description : { type : String},
    rating : {type : Number}
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);