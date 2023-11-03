var express = require('express');
var router = express.Router();

const db = require('../public/db');


/* ============================================================================= ===================== ============================================================================= */
/* ============================================================================= ===================== ============================================================================= */
/* ============================================================================= LOGIN ------ REGISTER ============================================================================= */
/* ============================================================================= ===================== ============================================================================= */
/* ============================================================================= ===================== ============================================================================= */

// PARAMETERS FOR ENCRYPTION
const bcrypt = require('bcrypt');
const saltRounds = 10; 

//routes 
/* GET log in. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

/* GET Sign Up */
router.get('/signup', function(req, res, next) {
  res.render('signup'), { title: 'signup' };
});


// REGISTRATION + ENCRYPTION
router.post('/add', async (req, res) => {
  const { name, mail, phone, password } = req.body;

  // Vérifier si l'adresse e-mail existe déjà dans la base de données
  db.query('SELECT * FROM clients WHERE mail = ?', [mail], async (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la recherche de l\'utilisateur');
      return;
    }

    // Si un utilisateur avec cette adresse e-mail existe déjà, afficher un message d'erreur
    if (results.length > 0) {
      const errorMessage = 'You already have an account';
      res.render('signup', { title: 'signup', signupError: errorMessage });
      return;
    }
    
    // Hasher le mot de passe
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        res.status(500).send('Erreur de hachage du mot de passe');
        return;
      }

      // Insérer l'utilisateur avec le mot de passe haché dans la base de données
      db.query('INSERT INTO clients (name, mail, phone, password) VALUES (?, ?, ?, ?)', [name, mail, phone, hash],
        (err, results) => {
          if (err) {
            res.status(500).send('Erreur lors de l\'insertion de l\'utilisateur dans la base de données');
            return;
          }
          // Rediriger vers la page de connexion
          res.redirect('login');
        }
      );
    });
  });
});


// CONNEXION + DECRYPTION - COMPARATION
router.post('/connect', async (req, res) => {
  const { mail, password } = req.body;

  // Rechercher l'utilisateur dans la base de données en fonction de son e-mail
      db.query('SELECT * FROM clients WHERE mail = ?', [mail], async (err, results) => {
        if (err) {
          res.status(500).send('Erreur lors de la recherche de l\'utilisateur');
          return;
        }

        // Si aucun utilisateur n'est trouvé, afficher le message "Mail not found, create an account"
        if (results.length === 0) {
          const errorMessage = 'Mail not found, create an account';
          res.render('login', { title: 'login', passwordError: errorMessage });
          return;
        }

        // Récupérer le mot de passe haché de l'utilisateur depuis la base de données
        const hashedPassword = results[0].password;

        // Utiliser bcrypt.compare() pour comparer le mot de passe fourni avec le mot de passe haché
        bcrypt.compare(password, hashedPassword, (err, isPasswordValid) => {
          if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la comparaison des mots de passe');
            return;
          }

          // Si la comparaison renvoie true, l'utilisateur est authentifié
          if (isPasswordValid) {
            // Rediriger vers la page d'accueil ou la page de profil de l'utilisateur authentifié
            res.redirect('/');
          } else {
            // Si la comparaison renvoie false, le mot de passe est incorrect, renvoyer un message d'erreur
            const errorMessage = 'Mot de passe incorrect';
            res.render('login', { title: 'login', passwordError: errorMessage });
          }
      });
    });
});





/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;