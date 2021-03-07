const fs = require('fs');
const { sequelize } = require('../database/models');
const db = require("../database/models");
let {check, validationResult,body}= require('express-validator');


const cartController = {

addProduct:function(req, res,next) {
console.log(req.params.id);
res.send("Llego algo")
    /*db.Cart.create({
        user_id: req.session.userid
    }).then(function(result){
        db.Cart_Product.create({
            cart_id: result.id,
            product_id: req.params.id
        })
        db.Product.findByPk(req.params.id)
        .then(function(product){
            db.Cart.update({total: product.price}, {
                where: {
                  user_id: req.session.userid
                }
            })})

    }) */
}

}



module.exports = cartController;