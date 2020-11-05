var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')


router.get('/',indexController.index); /* GET home page. */
router.get('/register', indexController.register); /* GET register page. */
router.get('/login', indexController.login); /* GET login page. */
router.get('/productDetail', indexController.productDetail); /* GET detail product page. */
router.get('/cart', indexController.cart); /* GET cart page. */
router.get('/admin', indexController.admin); /* GET admin page. */
router.get('/productAdd', indexController.productAdd); /* GET admin product page. */

module.exports = router;
