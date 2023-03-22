var express = require('express');
var router = express.Router();


// On appel la base de données
var database = require('../database');

/* GET home page. */
router.get('/', function (req, res, next) {
    // On définit les variables loggedIN et showEmail avec les req.sessions qui seront définits plus tard
    var loggedIN = req.session.loggedIN || false;
    var showEmail = req.session.email || '';
    res.render('home', { title: 'Home page', loggedIN, showEmail });
});

module.exports = router;



