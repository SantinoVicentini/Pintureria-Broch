var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('');
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;
