const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const keys = require('../config/keys');
const Brand = require('../models/Brand');

mongoose.connect(keys.mongodbMobile.dbURI);     
 
router.get('/get-all', async (req, res, next) => {
    let allBrands = await Brand.find();
    res.send(allBrands);
});

router.get('/get-by-id/:id', async (req, res, next) => {
    let brandById = await Brand.findOne({id : req.params.id});
    res.send(brandById);   
});  


module.exports = router;