const fs = require('fs');
const { sequelize } = require('../database/models');
const db = require("../database/models");
let {check, validationResult,body}= require('express-validator');
const { info } = require('console');


const cartController = {

addProduct:function(req, res,next) {
console.log(req.params.id);
res.send("Llego algo")
            /*Ponemos el id del usuario que quiere agregar un prodcuto al carrito*/
             var userid = req.session.userLogged.id;

             /*Si el carrito esta activo. Esto es para una persona que ya se le creo un carrito*/


            db.Cart.findOne({
                where:
                {
                    user_id: userid,
                    status:"activo"
                }
            }).then(resp=>{         
                 if(resp){   /*ALGO CON CART PRODUCT*/ }
                 else{
                    /*creamos el carrito*/
                 }
                 db.Cart.create(
                    {
                        user_id : userId,
                        status: "activo"
                    })
                .then(resp => {
                    /* Agregamos el producto al nuevo carrito creado*/

                    req.session.carrito_id = response.id;
                    db.CartProduct.create(
                        {
                            carrito_id : resp.id,
                            producto_id : req.body,/*el id del producto*/
                        })
                    .then((data) => {
                        return res.json(data)
                    })
                })      
            })
            },
deleteProductCart:function(req, res,next) {
},
viewCart : function(req, res, next){
    db.Cart.findOne({
        where:
        {
            user_id: userid,
            status:"activo"
        },
    })
    .then( info => {
        if(info){
        req.session.carrito_id = info.id;
        res.render("/cart", {info: info})
        } else {
            res.render("/cart")
        }
    })

},
}

module.exports = cartController;