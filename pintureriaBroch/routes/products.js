var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
let {check, validationResult,body}= require('express-validator');
//let multer = require('multer');
//let path = require ('path');
//let authMiddleware = require ('../middlewares/authMiddleware');

//var storage = multer.diskStorage({
//  destination: function (req, file, cb) {
//    cb(null, 'tmp/my-uploads')
//  },
//  filename: function (req, file, cb) {
//    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//  }
//})
 
// var upload = multer({ storage: storage })

// LISTADO
router.get('/',productController.list);

// CREACIÓN 
router.get('/create',productController.create);
router.post('/create',[check('name').isLength({min:5}).withMessage("Nombre muy corto"),
check('description').isLength({min:20}).withMessage("Descripcion muy corta")],productController.save);

// DETALLE 
router.get('/:id',productController.detail);

// ACTUALIZACIÓN
router.get('/edit/:id',productController.edit);
router.post('/edit/:id',productController.update);

router.post('/delete/:id',productController.delete);
/*
router.post('/create',upload.any(),productController.store);

router.get('/:id',productController.id);
router.get('/:id/edit',authMiddleware,productController.edit);
router.post('/:id/edit',upload.any(),authMiddleware,productController.update);
router.get('/:id/eliminar',authMiddleware,productController.eliminar);
*/
module.exports = router;