const GiftCategory = require('../models/GiftCategory');
const keys = require('../config/keys');
const mongoose = require('mongoose');

mongoose.connect(keys.mongodbMobile.dbURI);

var giftcats = [
    new GiftCategory({
        id   : 'bln',
        catId: 'gif',
        name : 'Ballons' 
    }),
    new GiftCategory({
        id   : 'cnd',
        catId: 'gif',
        name : 'Candles' 
    }),
    new GiftCategory({
        id   : 'cps',
        catId: 'gif',
        name : 'Caps' 
    }),
    new GiftCategory({
        id   : 'blw',
        catId: 'gif',
        name : 'Blowers' 
    }),
];

var done = 0;
for (var i = 0; i < giftcats.length; i++) {
    giftcats[i].save(function(err, result) {
        done++;
        if (done === giftcats.length) {
            mongoDisconnect();
        }
    });  
}

const mongoDisconnect = () => {
    mongoose.disconnect();
    console.log('disconnected');   
}
