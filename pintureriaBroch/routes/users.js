var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
let multer = require('multer');
let path = require ('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })

router.get('/login',userController.login);
router.get('/register',userController.register);
router.post('/register',upload.any(),userController.create);
router.get('/perfil',userController.perfil);
/*router.get('/edit/:idUser',userController.edit);
router.put('/edit', function(req, res, next) {
  res.send('FUI POR PUT');
});*/
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
