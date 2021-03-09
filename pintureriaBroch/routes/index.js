var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')


router.get('/',indexController.index); /* GET home page. */
router.get('/productDetail', indexController.productDetail); /* GET detail product page. */
router.get('/admin', indexController.admin); /* GET admin page. */
router.get('/productAdd', indexController.productAdd); /* GET admin product page. */
router.get('/exteriores/:id', indexController.id);

router.get('/check',function(req,res,next){
  if ( req.session.userLogged == undefined){
    res.send("no estás logueado");
  }else{
    res.send("estas logueado con " + req.session.userLogged.email);
  }
});
router.get('/search', indexController.search);
module.exports = router;
