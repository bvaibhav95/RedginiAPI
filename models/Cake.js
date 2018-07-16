var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cakeSchema = new Schema({
    cakeID       : {type: String, required: true},
    brandID      : {type: String, required: true},
    name         : {type: String, required: true},
    wtAndCost    : {type: Array,  required: true},
    category     : {type: String, required: true},
    egged        : {type: Boolean,required: true}
});                             
   
module.exports = mongoose.model('Cake', cakeSchema);   