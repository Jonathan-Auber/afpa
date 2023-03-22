const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
var connection = require('../database.js')


// A l'appel de la page on affiche le formulaire
router.get('/', (req, res) => {
  res.render('signup', { message: '', title: 'Bienvenue' });
});

//On recupère les entrées utilisateur (en post, donc dans le body)
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Vérification si l'utilisateur existe déjà
  connection.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
    if (results.length > 0) {
      res.render('signup', { message: 'Un utilisateur avec cette adresse mail existe déjà' , title: 'Bienvenue' });
    } else {
      // Hashage du mot de passe parametres: password_en_clair, nb de caracteres du salt, fonction fléchée)
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;

        // Insertion de l'utilisateur dans la base de données
        connection.query('INSERT INTO users SET ?', { email, password: hash }, (error, results) => {
          if (error) throw error;
          // On ecrit en session le "connecté = vrai" et l'email
          req.session.loggedIn = true;
          req.session.email = email;

          // on revient sur l'accueil
          res.redirect('/');
        });
      });
    }
  });
});

module.exports = router;
