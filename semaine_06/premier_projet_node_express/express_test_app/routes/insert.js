var express = require('express');
var router = express.Router();
var db = require('../database.js');

router.get('/', function (req, res, next) {
  res.render('form');
});


router.post('/', function (req, res, next) {
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;
  var message = req.body.message;
  var sql = `INSERT INTO contacts (f_name, l_name, email, message) VALUES (${fname},${lname}, ${email}, ${message}`;
db.query(sql, function(err, data){
  if (err) throw 'error';
  res.render ('form', "Données enregistrées");})



});



module.exports = router;