let db = require("../../database/models");
var path = require('path');


let productosController = {
list : function(req,res,next) {
    db.Product.findAll()
    .then(function(productos){
        for(let i = 0; i < productos.length; i++)
        productos[i].setDataValue("endpoint", "/api/productos/" + productos[i].id)
        let respuesta = {
            meta: {
                status: 200,
                total: productos.length,
                url: "/api/productos"

            },
            data: productos,
        };
      res.json(respuesta)
  
    }).catch(function (error){
        console.log(error),
        res.send("Error de la página")
    
      })
  },
  find : function (req,res,next) {
    db.Product.findByPk(req.params.id)
    .then (function (product) {
        res.json(product)

    })
}

}


  module.exports = productosController;