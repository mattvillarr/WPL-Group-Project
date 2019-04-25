const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    user : { type : mongoose.Schema.Types.ObjectId, ref : 'User', required : true},
    product : {type : mongoose.Schema.Types.ObjectId, ref: 'Product' , required : true},
    quantity: {type: Number, default: 1}
});

// Export the model
module.exports = mongoose.model('Order', OrderSchema);