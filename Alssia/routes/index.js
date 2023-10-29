var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lukago Home' });
});

/* GET artcles page. */
router.get('/article/:department?', function(req, res, next) {
  const department = req.params.department;


  res.render('articlesPage', { title: 'Lukago Articles', department: department});
});

module.exports = router;
