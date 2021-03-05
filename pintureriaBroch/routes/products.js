var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
let {check, validationResult,body}= require('express-validator');
let multer = require('multer');
let path = require ('path');

//let authMiddleware = require ('../middlewares/authMiddleware');

var storage = multer.diskStorage({
destination: function (req, file, cb) {
 cb(null, 'public/images')
},
filename: function (req, file, cb) {
 cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
 }
});
 
var upload = multer({ storage: storage });




router.get('/',productController.list);

// CREACIÓN 
router.get('/create',productController.create);
router.post('/create',[check('name').isLength().withMessage("Nombre muy corto"),
check('description').isLength().withMessage("Descripcion muy corta")],upload.any(),productController.save);

// DETALLE 
router.get('/:id',productController.detail);

// ACTUALIZACIÓN
router.get('/edit/:id',productController.edit);
router.post('/edit/:id',productController.update);

router.post('/delete/:id',productController.delete);

module.exports = router;