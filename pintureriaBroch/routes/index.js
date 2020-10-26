var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register');
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET detail product page. */
router.get('/productDetail', function(req, res, next) {
  res.render('productDetail');
});

/* GET cart page. */
router.get('/cart', function(req, res, next) {
  res.render('cart');
});


module.exports = router;
