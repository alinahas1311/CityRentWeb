var express = require('express');
var router = express.Router();

const db = require('../public/db');

/* ============================================================================= ===================== ============================================================================= */
/* ============================================================================= ===================== ============================================================================= */
/* ============================================================================= ROOTS ---- FETCH DATA ============================================================================= */
/* ============================================================================= ===================== ============================================================================= */
/* ============================================================================= ===================== ============================================================================= */


//////////////////// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lukago Home' });
});

//////////////////// GET artcles page
router.get('/article/:department?', function(req, res, next) {
  const department = req.params.department;

  res.render('articlesPage', { title: 'Lukago Articles', department: department});
});

//////////////////// GET produit page

router.get('/produit/:id', (req, res) => {
  res.render('ficheProduit', { title: 'Lukago Articles'});
});

router.get('/produit/fetch/:id', (req, res) => {
  const id = req.params.id;
  console.log("produit 1", id)
  db.query('SELECT * FROM articles WHERE id_article = ?', [id], (err, results) => {
      if (err) throw err;
      res.send(results)
  });
});

//////////////////// GET DATA FOR ARTICLES
router.post('/article/fetch/data', (req, res) => {
  const sqlQuery = req.body.sqlQuery;

  console.log("\n SQL QUERY : ", sqlQuery)
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    //console.log(results)
    res.send(results);
  });
})


module.exports = router;
