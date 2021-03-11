const fs = require('fs');
const { sequelize } = require('../database/models');
const db = require("../database/models");
let {check, validationResult,body}= require('express-validator');


const productController = {
    list: function(req, res,next) {
        db.Product.findAll()
         .then(function(product) {
            return res.render('listadoProductos', {product: product});
        }).catch(function (error){
            console.log(error),
            res.send("Error de la página")});
    },


    create: function (req,res,next) {
    db.Product.findAll()
    .then (function (products) {
    db.Category.findAll()
    .then(function(categorias) {
    db.Trademark.findAll()
       .then(function(marcas) {
        db.Color.findAll()
        .then(function(colores) {
                return res.render('cargaProductos', {products:products, categorias:categorias, marcas:marcas, colores:colores});/*,categoria: category_id, color_id : color,  trademark_id: trademark}*/
            })
        })
       })
    }).catch(function (error){
        console.log(error),
        res.send("Error de la página")});
        /*return res.render ('cargaProductos',{product:product});*/
    },

    save: function (req,res,next) {
         let errors = validationResult(req);
    if(errors.isEmpty()){
        
        db.Product.create({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            image:req.files[0].filename,
            idcategory:req.body.categorias,
            idcolor:req.body.colores,
            idtrademark:req.body.marcas,
        }
        
        );
        {console.log(req.body.categorias)}
        res.send("has registrado el producto");

    }else{
        return res.render("cargaProductos",{errors:errors.errors});
    }
    },

    detail: function (req,res,next) {
        db.Product.findByPk(req.params.id)
        .then (function (product) {
            res.render("productDetail", {product:product})

        })
    },

    edit: function (req,res,next) {
        db.Product.findByPk (req.params.id)
        .then(function(product) {
            db.Category.findAll()
            .then(function(categorias) {
            db.Trademark.findAll()
               .then(function(marcas) {
                db.Color.findAll()
                .then(function(colores) {
                    
            res.render ("edicionProducto", {product:product, categorias:categorias, marcas:marcas, colores:colores})
        })
    })
})
})
    },

    update: function (req,res,next) {
        db.Product.update ({ name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            image:req.files[0].filename,
            idcategory:req.body.categorias,
            idcolor:req.body.colores,
            idtrademark:req.body.marcas,
            where: {
                id: req.params.id,
            }
         } );
        res.redirect("/products/" + req.params.id);
    },
    delete: function (req,res,next) {
        db.Product.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.redirect("/products/");/* ESTA HECHO EL CONTROLADOR, NO LA OPCION EN LA VISTA*/
    },
    pintureria:function(req, res, next){
        db.Product.findAll({
            where:{idcategory:2}
        })
        .then (function (product){
            res.render('buscarproductos',{product})})
        .catch(function (error){ console.log(error)}); 
    },
    accesorios:function(req, res, next){
        db.Product.findAll({
            where:{idcategory:3}
        })
        .then (function (product){
            res.render('buscarproductos',{product})})
        .catch(function (error){ console.log(error)}); 
    },
    revestimientos:function(req, res, next){
        db.Product.findAll({
            where:{idcategory:4}
        })
        .then (function (product){
            res.render('buscarproductos',{product})})
        .catch(function (error){ console.log(error)}); 
    },
    herramientas:function(req, res, next){
        db.Product.findAll({
            where:{idcategory:5}
        })
        .then (function (product){
            res.render('buscarproductos',{product})})
        .catch(function (error){ console.log(error)}); 
    }
    

    /*

    id: function(req,res,next){
        let id = req.params.id;
        let products = {};
        for(let i = 0; i <products.length; i ++){
            if(products[i].id == id){
                products = products[i];
                return res.render ("productDetail", { products, error: ""});          
        }

    }  

    return res.render ("productDetail", {error : "no se encontro el producto ", id});  

},

    //product: function(req, res, next) {
      //  res.render('index');
    //},
    //create: function(req, res, next) {
      //  res.render('productAdd');
       create: function(req,res,next) {
       res.render('productAdd');

    },

    save: function(req,res) {
        console.log(req.body);
        db.product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            category_id: req.body.category,
            color_id: req.body.color,
            trademark_id: req.body.trademark,

        });
        
        res.redirect("/");
        
         },

    eliminar: function(req, res, next) {
        res.send('Eliminar un producto');
    },
    store: function(req,res,next){
 
        var products1 = {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            image:req.files[0].filename
        };

        products.push(products1);
        let productsJSON = JSON.stringify(products);
        fs.writeFileSync(__dirname + '/../data/products.json', productsJSON);
        return res.send('Producto creado');

    },
    edit: function(req,res,next){
        let idProduct = req.params.id;
        var productFound;
       for (let i=0; i<products.length;i++){
           if(products[i].id == idProduct){
               productFound = products[i];
               break;
           }
        }

        if(productFound){
            res.render("productEdit",{productFound});
        }else{
        return res.send('producto invalido');}
    },
    update: function(req,res,next){
        let idProduct = req.params.id;
        var editProduct2 = products.map(function(products){

            if(products.id == idProduct){

                let productEditado= req.body;
                productEditado.id = idProduct;
                return productEditado;
            }
            return products;
        });
        editProductsJSON = JSON.stringify(editProduct2);
        fs.writeFileSync(__dirname + '/../data/products.json', editProductsJSON);
        return res.send("Producto Modificado");
    },
    eliminar : function (req,res,next) {
        let idProduct = req.params.id;
        let productsEliminados = products.filter(function (products) {;
        return products.id != idProduct;

    });
    productsEliminadosJSON = JSON.stringify(productsEliminados)
    fs.writeFileSync(__dirname + "/../data/products.json", productsEliminadosJSON);
    res.send ("Producto eliminado");
},
   
*/
}
module.exports = productController;