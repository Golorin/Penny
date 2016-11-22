var express = require('express');
var router = express.Router();
var programs = require('../api/programs.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
