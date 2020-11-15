var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')


router.get('/',indexController.index); /* GET home page. */
router.get('/productDetail', indexController.productDetail); /* GET detail product page. */
router.get('/cart', indexController.cart); /* GET cart page. */
router.get('/admin', indexController.admin); /* GET admin page. */
router.get('/productAdd', indexController.productAdd); /* GET admin product page. */
router.get('/exteriores/:id', indexController.id)

module.exports = router;
