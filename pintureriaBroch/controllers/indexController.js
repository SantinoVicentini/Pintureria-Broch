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
    let termi = Object.values(term);
    let termino = termi.toString();
    db.Product.findAll({
        /*where:{name:{[Op.like]: '%' +termino +'%'}}*/
        where: {
            [Op.or]: [
                {name:{[Op.like]: '%' +termino +'%'}},
                {description:{[Op.like]: '%' +termino +'%'}}
            ]
        }
    })
    .then (function (product){
        res.render('buscarproductos',{product})})
    .catch(err => console.log(err)); 
},
gif: function(req, res, next){
    if ( req.session.userLogged != undefined){
        return res.render("gifs");
          }
        else{
           return  res.render("index",{errors:[{msg:'No estas logueado'}]});
        }
},probando:function(req, res, next){
        res.render('probando');
}



}
module.exports = indexController;