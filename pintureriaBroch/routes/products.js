var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController')

router.get('/',productController.listado);
router.get('/create',productController.create);
router.post('/',productController.store);
router.get('/:id',productController.id);
router.get('/:id/edit',productController.edit);
router.post('/:id/edit',productController.update);
router.get('/eliminar',productController.eliminar);

module.exports = router;