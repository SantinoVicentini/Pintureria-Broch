const productController = {
    listado: function(req, res, next) {
        res.render('login');
    },
    crear: function(req, res, next) {
        res.render('productAdd');
    },
    eliminar: function(req, res, next) {
        res.render('login');
    }

}
module.exports = productController;