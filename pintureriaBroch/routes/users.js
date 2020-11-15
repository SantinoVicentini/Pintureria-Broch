var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

router.get('/login',userController.login);
router.get('/register',userController.register);
router.get('/perfil',userController.perfil);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
