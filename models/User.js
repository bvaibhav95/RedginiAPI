const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    providerID : {type: String, required:true},
    provider   : {type: String, required:true},
    username   : {type: String, required:true},
    email      : {type: String, required:true},
    phone      : {type: String, required:false},
    order      : {type: Array, required:false},
    address    : {type: Array, required:false}
});

module.exports = mongoose.model('User', userSchema);