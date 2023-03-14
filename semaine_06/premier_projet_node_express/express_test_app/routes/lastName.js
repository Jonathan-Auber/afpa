var express = require('express');
var router = express.Router();
var db = require('../database.js');

router.get('/', (req, res) => {
    db.query('SELECT l_name FROM contacts ORDER BY l_name DESC', (err, rows) => {
        if (err) throw err;
        res.render('users', { users: rows});
    });
});

module.exports = router;