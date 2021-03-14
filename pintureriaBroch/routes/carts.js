var express = require('express');
var router = express.Router();
let loginMiddleware = require ('../middlewares/loginMiddleware');


const cartController = require('../controllers/cartController');

router.get('/',loginMiddleware, cartController.viewCart);
router.post('/addProduct/:id',loginMiddleware, cartController.addProduct);
router.post('/deleteProduct/:id',loginMiddleware, cartController.deleteProduct);



module.exports = router;