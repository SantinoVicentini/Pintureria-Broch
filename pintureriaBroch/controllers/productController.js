const fs = require('fs');
var products = JSON.parse(fs.readFileSync(__dirname + '/../data/products.json'));


const productController = {
    listado: function(req, res, next) {
        res.send('Lsitado de todos los productos');
    },
    product: function(req, res, next) {
        res.render('index');
    },
    create: function(req, res, next) {
        res.render('productAdd');
    },
    eliminar: function(req, res, next) {
        res.send('Eliminar un producto');
    },
    store: function(req,res,next){
        products.push(req.body);
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
    }
}
module.exports = productController;