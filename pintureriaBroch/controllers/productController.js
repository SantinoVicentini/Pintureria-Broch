const productController = {
    listado: function(req, res, next) {
        res.send('Lsitado de todos los productos');
    },
    crear: function(req, res, next) {
        res.render('productAdd');
    },
    eliminar: function(req, res, next) {
        res.send('Eliminar un producto');
    }

}
module.exports = productController;