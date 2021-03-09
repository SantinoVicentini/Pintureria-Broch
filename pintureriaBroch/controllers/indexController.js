const path = require('path');
const fs = require ('fs');
const Sequelize = require('sequelize');
const Op =Sequelize.Op;
const { sequelize } = require('../database/models');
const db = require("../database/models");

const indexController = {
    index: function(req, res, next) {
        if ( req.session.userLogged != undefined){
            return res.render("index",{errors:[{msg:'Acabás de loguearte'}]});
              }
            else{
               return  res.render("index",{errors:[{msg:'No estas logueado'}]});
            }
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

},
search: function(req, res, next) {
    let term = req.query;

    db.Product.findAll(
        
        {[Op.or]: [
        {
          name: {
            [Op.like]: '%' +term +'%'
          }
        },
        {
          description: {
            [Op.like]:'%' +term +'%'
          }
        }]
    }
       /* {[Op.like]:'%' +term +'%'}*/
       
    )
    .then (function (product){
        res.render('buscarproductos',{product})})
    .catch(err => console.log(err)); 
},

    pinturerias: function (req, res, next) {
        db.Product.findAll({where:{idcategory: 2}
        }).then(function(products){
        return res.render("buscarproductos", {products});
    })
},
    accesorios: function (req, res, next) {
        db.Product.findAll({where:{idcategory: 3}
        }).then(function(products){
            return res.render("buscarproductos", {products});
        }).catch(function(error){
            console.log(error);
        })
    },
    revestimientos: function (req, res, next) {
        db.Product.findAll({where:{idcategory: 4}
        }).then(function(products){
            return res.render("buscarproductos", {products});
        })
    },
    herramientas: function (req, res, next) {
        db.Product.findAll({where:{idcategory: 5}
        }).then(function(products){
            return res.render("buscarproductos", {products});
        })}










}
module.exports = indexController;