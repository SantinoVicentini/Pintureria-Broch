const fs = require('fs');
var products = JSON.parse(fs.readFileSync(__dirname + '/../data/products.json'));
let db = require ('../database/models')


const productController = {
    listado: function(req, res, next) {
        res.render ("listado",{products});
    },
    id: function(req,res,next){
        let id = req.params.id;
        let products1 = {};
        for(let i = 0; i <products.length; i ++){
            if(products[i].id == id){
                products1 = products[i];
                return res.render ("productDetail", { products1, error: ""});          
        }

    }  

    return res.render ("productDetail", {error : "no se encontro el producto ", id});  

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
   crear: function (req,res) {
    db.Product.findAll ()
    .then(function(products){
        return res.render("listado", {products: products})
    })

   },
   guardado: function (req,res) {
       db.Product.create({
           name: req.body.name ,
           description: req.body.description ,
           price: req.body.price,
           image: req.body.image,
           category_id: req.body.category_id ,
           trademark_id: req.body.trademark_id,
       })
   }

}
module.exports = productController;