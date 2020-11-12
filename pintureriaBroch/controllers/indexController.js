const path = require('path');
const fs = require ('fs');

let datosJson = fs.readFileSync(path.resolve(__dirname,"../data/exteriores.json"),"utf-8");
let datosExteriores = JSON.parse(datosJson);

const indexController = {
    index: function(req, res, next) {
        res.render('index');
    },
    register: function(req, res, next) {
        res.render('register');
    },
    login:function(req, res, next) {
        res.render('login');
    },
    productDetail: function(req, res, next) {
        res.render('productDetail');
    },
    cart: function(req, res, next) {
        res.render('cart');
    },
    admin: function(req, res, next) {
        res.render('admin');
    },
    productAdd: function(req, res, next) {
        res.render('productAdd');
    },
    id: function(req,res,next){
        let id = req.params.id;
        let exteriores = {};
        for(let i = 0; i <datosExteriores.length; i ++){
            if(datosExteriores[i].id == id){
                exteriores = datosExteriores[i];
                return res.render ("exteriores", { exteriores, error: ""});          
        }

    }  

    return res.render ("exteriores", {error : "no se encontro el producto ", id});  

}  
}

module.exports = indexController;