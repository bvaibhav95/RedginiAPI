const CakeCategory = require('../models/CakeCategory');
const keys = require('../config/keys');
const mongoose = require('mongoose');

mongoose.connect(keys.mongodbMobile.dbURI);

var cakecats = [
    new CakeCategory({
        id   : 'blf',
        catId: 'cak',
        name : 'Blackforest' 
    }),
    new CakeCategory({
        id   : 'chc',
        catId: 'cak',
        name : 'Chocolate' 
    }),
    new CakeCategory({
        id   : 'tfl',
        catId: 'cak',
        name : 'Truffle' 
    }),
    new CakeCategory({
        id   : 'rdv',
        catId: 'cak',
        name : 'Red velvet' 
    }),
    new CakeCategory({
        id   : 'whf',
        catId: 'cak',
        name : 'Whiteforest' 
    }),
    new CakeCategory({
        id   : 'frt',
        catId: 'cak',
        name : 'Fruit' 
    }),
    new CakeCategory({
        id   : 'inf',
        catId: 'cak',
        name : 'Indian flavors' 
    }),
    new CakeCategory({
        id   : 'bts',
        catId: 'cak',
        name : 'Butterscotch' 
    }),
    new CakeCategory({
        id   : 'vnl',
        catId: 'cak',
        name : 'Vanilla' 
    }),
];

var done = 0;
for (var i = 0; i < cakecats.length; i++) {
    cakecats[i].save(function(err, result) {
        done++;
        if (done === cakecats.length) {
            mongoDisconnect();
        }
    });  
}

const mongoDisconnect = () => {
    mongoose.disconnect();
    console.log('disconnected');   
}
