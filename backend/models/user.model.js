const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    email : {
        type : String, 
        requires: true, 
        unique : true,
        match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{type : String, required: true}
});


// Export the model
module.exports = mongoose.model('User', UserSchema);