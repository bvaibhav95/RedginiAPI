const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const keys = require('../config/keys');
const Cake = require('../models/Cake');
const Brand = require('../models/Brand');

mongoose.connect(keys.mongodbMobile.dbURI);     
 
router.get('/get-all/:brandId', async (req, res, next) => {
    let allCakesOfBrand = await Cake.find({brandID : req.params.brandId});
    res.send(allCakesOfBrand);
});



module.exports = router;