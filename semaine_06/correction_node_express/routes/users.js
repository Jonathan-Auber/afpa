var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET users listing. */
router.get('/users', (req, res, next) => {
  db.query('SELECT * FROM contacts', (err, rows) => {
    if (err) throw err;
    res.render('users', { users: rows });
  });
});

module.exports = router;
