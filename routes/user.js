const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const keys = require('../config/keys');
const User = require('../models/User');

mongoose.connect(keys.mongodbMobile.dbURI);  
 
router.get('/get-by-id/:providerID', async (req, res, next) => {
    let userById = await User.findOne({providerID : req.params.providerID});
    res.send(userById);
});

router.post('/add-address', async (req, res, next) => {
    let userData = req.body;
    let user = await User.findOne({providerID : userData.providerID});
    user.address.push(userData.address);
    let status = await user.save();
    if(status){
        res.send(JSON.stringify({status : 'success'}));   
    }else{
        res.send(JSON.stringify({status : 'failed'}));
    }
});

router.post('/save-order', async (req, res, next) => {
    let orderData = req.body;
    let user = await User.findOne({providerID : orderData.providerID});
    user.order.push(orderData.address);
    let status = await user.save();
    if(status){
        res.send(JSON.stringify({status : 'success'}));   
    }else{
        res.send(JSON.stringify({status : 'failed'}));
    }
});

module.exports = router;