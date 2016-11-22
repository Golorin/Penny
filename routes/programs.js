var express = require('express');
var router = express.Router();
var addProgram = require('../api/addProgram');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('programs');
  collection.find({},{}, function(e, docs) {
    res.render('programs', {
      'programs' : docs
    });
  });
});

router.post('/', function(req, res, next) {
  addProgram(req.body.name, req.body.description, req);
  var db = req.db;
  var collection = db.get('programs');
  collection.find({},{}, function(e, docs) {
    res.render('programs', {
      'programs' : docs
    });
  });
})

module.exports = router;
