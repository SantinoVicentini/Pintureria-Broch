var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require ('fs');

let datosJson = fs.readFileSync(path.resolve(__dirname,"../data/exteriores.json"),"utf-8");
let datosExteriores = JSON.parse(datosJson);


const indexController = require('../controllers/indexController')


router.get('/',indexController.index); /* GET home page. */
router.get('/register', indexController.register); /* GET register page. */
router.get('/login', indexController.login); /* GET login page. */
router.get('/productDetail', indexController.productDetail); /* GET detail product page. */
router.get('/cart', indexController.cart); /* GET cart page. */
router.get('/admin', indexController.admin); /* GET admin page. */
router.get('/productAdd', indexController.productAdd); /* GET admin product page. */
router.get('/exteriores', function(req,res,next){
    res.send(datosExteriores);
}); /*Se prueba lectura de archivo Json 9/11/2020. se ve desde el back, desde el servidor */
router.get('/exteriores/:id', function(req,res,next){
    let id=req.params.id;
    for(let i=0;i<datosExteriores.lenght;i++){
        console.log(datosExteriores[i]);
    }


    return res.render("exteriores");/*Esto se ve desde la vista exteriores.ejs*/
});
module.exports = router;
