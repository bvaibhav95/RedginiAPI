const MainPdtCategory = require('../models/MainPdtCategory');
const keys = require('../config/keys');
const mongoose = require('mongoose');

mongoose.connect(keys.mongodbMobile.dbURI);

var mainPdtCats = [
    new MainPdtCategory({
        id : 'cak',
        name : 'Fresh cream cakes'
    }),
    new MainPdtCategory({
        id : 'gif',
        name : 'Gifts'
    }),
    new MainPdtCategory({
        id : 'chc',
        name : 'Chocolates'
    }),
    new MainPdtCategory({
        id : 'cok',
        name : 'Cookies'
    }),
    new MainPdtCategory({
        id : 'tst',
        name : 'Toasts'
    }),
    new MainPdtCategory({
        id : 'khr',
        name : 'Khari'
    }),
    new MainPdtCategory({
        id : 'bct',
        name : 'Biscuits'
    })
];

var done = 0;
for (var i = 0; i < mainPdtCats.length; i++) {
    mainPdtCats[i].save(function(err, result) {
        done++;
        if (done === mainPdtCats.length) {
            mongoDisconnect();
        }
    });  
}

const mongoDisconnect = () => {
    mongoose.disconnect();
    console.log('disconnected');   
}
