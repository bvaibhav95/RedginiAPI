const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const keys = require('../config/keys');
const UserImg = require('../models/UspImg');

router.get('/usp-imgs', async (req, res, next) => {
    let uspImages = await UserImg.find();
    res.send(uspImages);
});

module.exports = router;
