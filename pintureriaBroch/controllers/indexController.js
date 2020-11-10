const indexController = {
    index: function(req, res, next) {
        res.render('index');
    },
    register: function(req, res, next) {
        res.render('register');
    },
    login:function(req, res, next) {
        res.render('login');
    },
    productDetail: function(req, res, next) {
        res.render('productDetail');
    },
    cart: function(req, res, next) {
        res.render('cart');
    },
    admin: function(req, res, next) {
        res.render('admin');
    },
    productAdd: function(req, res, next) {
        res.render('productAdd');
    }

      

}

module.exports = indexController;