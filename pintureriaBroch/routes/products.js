var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController')

router.get('/listado',productController.listado);
router.get('/crear',productController.crear);
router.get('/eliminar',productController.eliminar);

module.exports = router;