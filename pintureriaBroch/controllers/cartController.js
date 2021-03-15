const fs = require('fs');
const { sequelize } = require('../database/models');
const db = require("../database/models");
let {check, validationResult,body}= require('express-validator');
const { info } = require('console');


const cartController = {

addProduct:function(req, res,next) {   
    
            /*Buscamos el id del usuario*/
            db.User.findOne({
                where: {
                    email: req.session.userLogged.email
                }
            }).then(function(result){
                req.session.userid = result.id;
                db.Cart.findOne({
                    where:{
                        user_id: req.session.userid,
                        status:1
                    }
                }).then(result=>{
                    // Si el carrito está creado, agrega el product*/
                    if(result != null){
                        db.Cart_Product.create({
                            carrito_id: result.id,
                            product_id: req.params.id
                        })
                        
                        db.Product.findByPk(req.params.id)
                            .then(function(product){
                                db.Cart.update({total: result.total + product.price}, {
                                    where: {
                                      id: result.id
                                    }
                                })   

                        });
                        
                    //Si no es asi, crealo el carrito y tenemos que agregar el producto al carrito
                    } else {

                    console.log('Llegaste acá!');
                        db.Cart.create({
                            user_id: req.session.userid,
                            status: 1,
                            total: 0
                        }).then(function(result){
                            req.session.cartid = result.id,
                            db.Cart_Product.create({
                                carrito_id: result.id,
                                product_id: req.params.id
                            })
                            db.Product.findByPk(req.params.id)
                            .then(function(product){
                                db.Cart.update(
                                    {total: product.price}, 
                                    {
                                    where:{
                                      user_id: req.session.userid
                                    }

                                })                       
 })
                            
                                }) 
                    }
                })
            })
        },
deleteProduct:function(req, res,next) {
    db.User.findOne({
        where: {
            email: req.session.userLogged.email
        }
    }).then(function(result){
        req.session.userid = result.id;
        db.Cart.findOne({
            where:{
                user_id: req.session.userid,
                status:1
            }
        }).then(result=>{
                db.Product.findByPk(req.params.id)
                    .then(function(product){
                        db.Cart.update({total: result.total - product.price}, {
                            where: {
                              id: result.id
                            }
                        })
                }).then(entonces=>{
                db.Cart_Product.findOne({where:{product_id: req.params.id, carrito_id: result.id}})
                    .then(eliminado =>{
                        console.log(eliminado);
                        db.Cart_Product.destroy({where:{id: eliminado.id}})
                        return res.redirect("/carts")
                    
                  })
                })
        })
    })  
} 
     /*db.Cart_Product.destroy({
                    where: {carrito_id: users.cart[0].dataValues.id,product_id: req.params.id}*/
,
viewCart : function(req, res, next){
    let userLogged= req.session.userLogged;
    db.Cart.findOne ({
        where: { user_id: userLogged.id, status: 1 }
    })
    .then(function(cart) {
      cart.getProducts()
        .then (function(products){
            res.render('cart', {products:products,cart:cart});
        })
    })
},
checkout: function(req, res, next){
    db.User.findOne({
        where: {
            email: req.session.userLogged.email
        }
    }).then(function(result){
        req.session.userid = result.id;
        db.Cart.findOne({
            where:{
                user_id: req.session.userid,
                status:1
            }
        }).then(cart => {
            db.Cart.update(
                {status:0}, {
                where: {
                    user_id: req.session.userid
                }
            })
            res.render('error',{errors:[{msg:'Gracias. Tu compra va en camino'}]})
        })
    })
},
buy:function (req, res, next){
    res.redirect('/error',{errors:[{msg:'Gracias. Tu compra va en camino'}]})
}





  /*  db.Product.findAll({
        include: [ { association: 'carts', , attributes: ["product_id"]} ]
      }).then((products) => {
          
        return res.json(products)
        //Muestra los productos
        res.render('cart', { productos : products, userLogged: userLogged });
      });
  } */
    

}

module.exports = cartController;