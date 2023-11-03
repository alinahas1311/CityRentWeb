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
