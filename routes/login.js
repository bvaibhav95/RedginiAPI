const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const keys = require('../config/keys');
const User = require('../models/User');
const SendOtp = require('sendotp');
const send_otp = new SendOtp(keys.msg91.authKey, `Your Redgini verification code - {{otp}}, Please do not share it with anybody`);

router.get('/send-otp/:mobileNum', function(req, res, next) {
    let randNum = Math.floor(100000 + Math.random() * 900000);
    // res.setHeader('Content-Type', 'application/json');
    send_otp.send('91'+req.params.mobileNum, "REDGNI", randNum, function (error, data) {
        send_otp.setOtpExpiry('10');
        res.send(JSON.stringify(data));
    });
});

router.get('/verify-otp/:otp/:mobileNum', function(req, res, next) {
    send_otp.verify('91'+req.params.mobileNum, req.params.otp, function (error, data) {
        res.send(JSON.stringify(data));
    });
});

router.get('/resend-otp/:mobileNum', function(req, res, next) {
    var phone = req.params.mobileNum;
    send_otp.retry('91'+phone, false, function (error, data) {
        res.send(data);
    });
});

module.exports = router;