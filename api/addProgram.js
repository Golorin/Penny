var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(program, description, req) {
  var db = req.db;
  var collection = db.get('programs');
  collection.insert({
    "name" : program,
    "description" : description
  });
};
