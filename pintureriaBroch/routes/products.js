var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')
let multer = require('multer');
let path = require ('path');
let authMiddleware = require ('../middlewares/authMiddleware');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })

router.get('/',productController.listado);
router.get('/create',authMiddleware,productController.create);
router.post('/',upload.any(),productController.store);
router.get('/:id',productController.id);
router.get('/:id/edit',authMiddleware,productController.edit);
router.post('/:id/edit',authMiddleware,productController.update);
router.get('/:id/eliminar',authMiddleware,productController.eliminar);



module.exports = router;