var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
let {check, validationResult,body}= require('express-validator');
let multer = require('multer');
let path = require ('path');
let adminMiddleware = require ('../middlewares/adminMiddleware');
let loginMiddleware = require ('../middlewares/loginMiddleware');

var storage = multer.diskStorage({
destination: function (req, file, cb) {
 cb(null, 'public/images')
},
filename: function (req, file, cb) {
 cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
 }
});
 
var upload = multer({ storage: storage });




router.get('/',loginMiddleware,adminMiddleware,productController.list);

// CREACIÓN 
router.get('/create',loginMiddleware,adminMiddleware,productController.create);
router.post('/create',loginMiddleware,adminMiddleware,[check('name').isLength().withMessage("Nombre muy corto"),
check('description').isLength().withMessage("Descripcion muy corta")],upload.any(),productController.save);

// DETALLE 
router.get('/:id',productController.detail);

// ACTUALIZACIÓN
router.get('/edit/:id',loginMiddleware,adminMiddleware,productController.edit);
router.post('/edit/:id',loginMiddleware,adminMiddleware,productController.update);

router.post('/delete/:id',loginMiddleware,adminMiddleware,productController.delete);
router.get('/categoria/pintureria', productController.pintureria);
router.get('/categoria/accesorios', productController.accesorios);
router.get('/categoria/revestimientos', productController.revestimientos);
router.get('/categoria/herramientas', productController.herramientas);
router.get('/cargados/ultimos', productController.ultimoscargados);
module.exports = router;