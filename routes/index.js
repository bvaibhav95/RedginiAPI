var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send(JSON.stringify({ test : 'testing API...' }));
});

module.exports = router;
