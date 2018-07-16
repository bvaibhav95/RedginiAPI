const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftCategorySchema = new Schema({
    id     : {type: String, required:true},
    catId  : {type: String, required:true},
    name   : {type: String, required:true},
});

module.exports = mongoose.model('GiftCategory', giftCategorySchema);