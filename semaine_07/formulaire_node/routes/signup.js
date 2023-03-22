var express = require('express');
var router = express.Router();

// On appel le module bcrypt
var bcrypt = require('bcrypt');

// On appel la base de données
var db = require('../database');


router.get('/', function (req, res, next) {
    res.render('signup', { title: 'Signup page', message: '' });
});

// On récupère les données envoyées par le formulaire de signup.ejs
router.post('/', function (req, res) {
    // On stocke le résultat dans un objet
    var { email, password } = req.body;
    // Si les champs sont vides, on renvoie un message d'erreur
    if (email === '' || password === '') {
        res.render('Signup', { title: 'Signup', message: 'Les champs sont vides' })
        // Sinon
    } else {
        // On stocke la requête à la base de données dans une variable ou ? sera défini par la suite
        var queryMail = `SELECT email FROM users WHERE email = ?`;
        // On execute la requête à la base de données en spécifiant que ? = email de l'objet reçu en amont
        db.query(queryMail, [email], function (err, result) {
            if (err) throw err;
            else {
                // Si la requête nous renvoie une correspondance (un tableau supérieur à 0)

                if (result.length > 0) {
                    // On renvoie une erreur sur la page Signup 
                    res.render('signup', { title: 'Signup', message: 'Cet email existe déjà' })
                } else {
                    // On stocke la requête à la base de données dans une variable ou ? sera défini par la suite
                    var queryInsert = `INSERT INTO users (email, password) VALUES (?,?)`;
                    // On demande au module bcrypt de hacher le password avec la fonction hash(password, INT, function) :
                    // password est récupéré dans l'objet en début de la fonction post
                    // INT correspond au paramètre de hachage
                    // Enfin la fonction qui permet d'exploiter le résultat
                    bcrypt.hash(password, 10, function (err, hash) {
                        if (err) throw err;
                        // On insère l'email et le résulat de hash dans la base de données.
                        db.query(queryInsert, [email, hash], function (err, result) {
                            if (err) throw err;
                            else {
                                // On définit req.session pour loggedIN et email
                                req.session.loggedIN = true;
                                req.session.email = email;
                                // On redirige vers la page home
                                res.redirect('/');
                            }
                        });
                    })
                }
            }
        });
    }
});

module.exports = router;