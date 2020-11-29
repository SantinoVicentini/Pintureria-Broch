var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController')

router.get('/listado',productController.listado);
router.get('/create',productController.create);
router.post('/',productController.store);
router.get('/:id',productController.edit);
router.get('/:id/edit',productController.create);
router.get('/eliminar',productController.eliminar);

module.exports = router;