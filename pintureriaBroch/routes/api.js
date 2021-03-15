var express = require('express');
var router = express.Router();
var apisController = require('../controllers/api/apisController')

router.get ("/contarProductos" , apisController.contarProductos);


router.get ("/contarUsuarios" , apisController.contarUsuarios);

module.exports = router;