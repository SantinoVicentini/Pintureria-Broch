var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
let multer = require('multer');
let path = require ('path');
let {check, validationResult,body}= require('express-validator');
let guestMiddleware = require ('../middlewares/guestMiddleware');

let fs = require ('fs');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })




// empieza CRUD base de datos
router.get('/', userController.index); 
router.get('/userList', userController.index); 
router.get('/login',userController.showLoginForm);
router.post('/login',[check('email').isEmail().withMessage("Ingrese un email correcto")],userController.login);
router.get('/register',userController.showRegisterForm);
router.post('/register',[
  check('name').isLength().withMessage("Nombre muy corto"),
  check('username').isLength().withMessage("Nombre de usuario muy corto"),
  check('email').isEmail().withMessage("Ingrese un email correcto"),
  check('password').isLength({min:8}).withMessage("La clave debe ser mayor a 8 caracteres")],upload.any(),userController.register);
  /*body('email').custom(function(value){
    db.User.findOne({
      
      where: {
        email: req.body.email,
      }
    })
    .then(function (users) 
    {
                            if (req.body.email == value) {
                              return false;
                                               }
                          });
                
                        }).withMessage("Usuario ya existente")],*/
router.get('/:id',userController.showProfile);
router.get('/edit/:id',userController.edit);
router.post('/edit/:id',userController.update);
router.post('/delete/:id', userController.delete);

// fin CRUD base de datos
/*
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })

router.post('/login',[
check('email').isEmail().withMessage("Ingrese un email correcto")
],userController.processlogin);
router.get('/register',userController.register);
router.post('/register',upload.any(),[
  check('fullName').isLength().withMessage("Nombre muy corto"),
  check('userName').isLength().withMessage("Apellido muy corto"),
  check('email').isEmail().withMessage("Ingrese un email correcto"),
  check('password').isLength({min:8}).withMessage("La clave debe ser mayor a 8 caracteres"),
  body('email').custom(function(value){
    var users = JSON.parse(fs.readFileSync(__dirname + '/../data/users.json'));
    for (let i=0; i<users.length;i++){
      if (users[i].email == value){
        return false;
      }
    }
    return true;
  }).withMessage("Usuario ya existente")
],userController.store);
router.get('/perfil', userController.perfil);
/*router.get('/edit/:idUser',userController.edit);
router.put('/edit', function(req, res, next) {
  res.send('FUI POR PUT');
});*/
/* GET users listing. */
router.get('/check',function(req,res,next){
  if ( req.session.userLogged == undefined){
    res.send("no estás logueado");
  }else{
    res.send("estas logueado con " + req.session.userLogged.email);
  }
});
module.exports = router;
