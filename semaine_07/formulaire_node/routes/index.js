var express = require('express');
var router = express.Router();

// On relie la base de données
var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
