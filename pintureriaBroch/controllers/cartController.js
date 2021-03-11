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
                                }).then
                        });
                        
                    //Si no es asi, crealo el carrito y tenemos que agregar el producto al carrito
                    } else {

                    console.log('Llegaste acá!');
                        db.Cart.create({
                            user_id: req.session.userid,
                            status: 1,
                            total: 0
                        }).then(function(result){
                            db.Cart_Product.create({
                                carrito_id: result.id,
                                product_id: req.params.id
                            })
                            db.Product.findByPk(req.params.id)
                            .then(function(product){
                                db.Cart.update({total: product.price}, {
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
deleteProductCart:function(req, res,next) {
    db.CartProduct.destroy(
        {
            where :
                {
                    product_id : req.body.product_id,
                    carrito_id : req.session.carrito_id
                }
        })/*redirigir a la misma pagina*/
},
viewCart : function(req, res, next){
    let userLogged= req.session.userLogged;


    db.Product.findAll({
        include: [ { association: 'carts', where: { user_id: userLogged.id, status: 1 } }
        ]
      }).then((products) => {
          
        //Muestra los productos
        res.render('cart', { productos : products, userLogged: userLogged });
        console.log(products)
      });
  }



   /* db.Cart.findAll()
    .then(function(cart) {
            return res.render('cart', {cart:cart});
        })*/


/*db.Cart.findOne({
        where:
        {
            user_id: req.session.userLogged.id,
            status: 1
        },
        include: 'products'
    })
    .then( data => {
        console.log(data);
        if(data){
        req.session.carrito_id = data.id;
        res.render("cart", {data: data})
        } else {
            return res.render('cart')
        }
    })*/
    
    
}


module.exports = cartController;