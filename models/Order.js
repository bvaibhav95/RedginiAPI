var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    userID       : {type: String, required: true},
    orderID      : {type: String, required: true},
    cart         : {type: Object, required: true},
    orderAddress : {type: String, required: true},
    orderDate    : {type: String, required: true},
    orderTime    : {type: String, required: true},
    payMode      : {type: String, required: true},
});                             
   
module.exports = mongoose.model('Order', orderSchema);   