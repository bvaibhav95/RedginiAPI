const User = require('../models/User');
const keys = require('../config/keys');
const mongoose = require('mongoose');

mongoose.connect(keys.mongodbMobile.dbURI);

var users = [
    new User({
        providerID : '123456',
        provider : 'google',
        username : 'vaibhav',
        email : 'bvaibhav.95@gmail.com',
        phone : '9730807012'
    }),
];

var done = 0;
for (var i = 0; i < users.length; i++) {
    users[i].save(function(err, result) {
        done++;
        if (done === users.length) {
            mongoDisconnect();
        }
    });  
}

const mongoDisconnect = () => {
    mongoose.disconnect();
    console.log('disconnected');   
}
