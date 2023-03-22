var express = require('express');
var router = express.Router();

// On appelle le module bcrypt
var bcrypt = require('bcrypt');

// On appel la base de données
var db = require('../database');

router.get('/', function (req, res, next) {
    res.render('login', { title: 'Login page', message: '' });
});

// On récupère les données envoyées par le formulaire de login.ejs
router.post('/', function (req, res) {
    // On stocke le résultat dans un objet
    var { email, password } = req.body;
    // On stocke la requête à la base de données dans une variable ou ? sera défini par la suite
    var queryLogin = `SELECT * FROM users WHERE email = ?`
    // On execute la requête à la base de données en spécifiant que ? = email de l'objet reçu en amont
    db.query(queryLogin, [email], function (err, result) {
        if (err) throw err;
        else {
            // Si la requête nous renvoie une correspondance (un tableau supérieur à 0)
            if (result.length > 0) {
                // On compare le mot de passe reçu avec celui de la base de données
                bcrypt.compare(password, result[0].password, function (err, same) {
                    if (err) throw err;
                    // Si la comparaison renvoie TRUE, on redirige vers la page d'accueil
                    else if (same) {
                        // On définit req.session pour loggedIN et email
                        req.session.loggedIN = true;
                        req.session.email = email;
                        // On redirige vers la page home
                        res.redirect('/');
                        // Si la comparaison renvoie FALSE, on renvoit sur la page loggin et on affiche un message d'erreur
                    } else {
                        res.render('login', { title: 'Login page', message: 'Mot de passe non reconnu' })
                    }
                })
                // Si la requête ne renvoie pas de correspondance, on renvoie la page login avec un message d'erreur
            } else {
                res.render('login', { title: 'Login page', message: 'Adresse email inconnue' })
            }
        }
    })
})

module.exports = router;