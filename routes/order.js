const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const keys = require('../config/keys');
const Order = require('../models/Order');

mongoose.connect(keys.mongodbMobile.dbURI);  
 
router.post('/save-order', async (req, res, next) => {
    let orderData = req.body;
    let newOrder = await new Order({
        userID       : orderData.providerID,
        orderID      : 'nsk001',
        cart         : orderData.cart,
        orderAddress : orderData.address,
        orderDate    : orderData.orderDate,
        orderTime    : orderData.orderTime,
        payMode      : orderData.payMode,
    }).save();
    if(newOrder){
        res.send(JSON.stringify({status : 'success'}));   
    }else{
        res.send(JSON.stringify({status : 'failed'}));
    }
});

module.exports = router;