const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const keys = require('../config/keys');
const MainPdtCategory = require('../models/MainPdtCategory');
const CakeCategory = require('../models/CakeCategory');
const GiftCategory = require('../models/GiftCategory');

mongoose.connect(keys.mongodbMobile.dbURI);     

router.get('/main-cats/get-all', async (req, res, next) => {
    let allMainPdtCats = await MainPdtCategory.find();
    res.send(allMainPdtCats);
});

router.get('/cake-category/get-all', async (req, res, next) => {
    let allCakeCats = await CakeCategory.find();
    res.send(allCakeCats);
});

router.get('/gift-category/get-all', async (req, res, next) => {
    let allGiftCats = await GiftCategory.find();
    res.send(allGiftCats);
});




module.exports = router;