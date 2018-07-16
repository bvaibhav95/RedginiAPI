const UspImg = require('../models/UspImg');
const keys = require('../config/keys');
const mongoose = require('mongoose');

mongoose.connect(keys.mongodbMobile.dbURI);

var uspimgs = [
    new UspImg({
        url : keys.cloudinary.url+'/toccata.jpg'
    }),
    new UspImg({
        url : keys.cloudinary.url+'/vmcelebration.jpg'
    }),
    new UspImg({
        url : keys.cloudinary.url+'/prakashbakery.jpg'
    }),
    new UspImg({
        url : keys.cloudinary.url+'/sugarfreecake.jpg'
    }),
    new UspImg({
        url : keys.cloudinary.url+'/surprisedelivery.jpg'
    }),
    new UspImg({
        url : keys.cloudinary.url+'/healthywheat.jpg'
    }),
    new UspImg({
        url : keys.cloudinary.url+'/midnightdelivery.jpg'
    }),
    new UspImg({
        url : keys.cloudinary.url+'/buy3get1.jpg'
    }),
    new UspImg({
        url : keys.cloudinary.url+'/rumcake.jpg'
    }),
];

var done = 0;
for (var i = 0; i < uspimgs.length; i++) {
    uspimgs[i].save(function(err, result) {
        done++;
        if (done === uspimgs.length) {
            mongoDisconnect();
        }
    });  
}

const mongoDisconnect = () => {
    mongoose.disconnect();
    console.log('disconnected');   
}
