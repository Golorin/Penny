var express = require('express');
var router = express.Router();
var addUser = require('../api/addUser.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e, docs) {
    res.render('index', {
      'userlist' : docs
    });
  });

});

router.post('/', function(req, res, next) {
  addUser(req.body.username, req.body.email, req);
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e, docs) {
    res.render('index', {
      'userlist' : docs
    });
  });
})

module.exports = router;
