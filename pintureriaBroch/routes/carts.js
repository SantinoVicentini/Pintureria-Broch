var express = require('express');
var router = express.Router();

const cartController = require('../controllers/cartController');

router.get('/', cartController.viewCart);
router.post('/addProduct/:id', cartController.addProduct);




module.exports = router;