var express = require('express');
var router = express.Router();

// On relie la base de données
var database = require('../database');

/* GET home page. */
router.get('/', function (req, res, next) {
    // On détruit la session actuelle
    req.session.destroy(function (err) {
        if (err) throw err;
        else {
            // On redirige vers Home page
            res.redirect('/');
        }
    })

});

module.exports = router;