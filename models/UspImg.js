var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uspimgSchema = new Schema({
    url : {type: String, required: true},
});

module.exports = mongoose.model('UspImg', uspimgSchema);