var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(username, email, req) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.insert({
    "username" : username,
    "email" : email
  });
};
