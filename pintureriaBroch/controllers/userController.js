const userController = {
    login: function(req, res, next) {
        res.render('login');
    },
    register: function(req, res, next) {
        res.render('register');
    },
    perfil: function(req, res, next) {
        res.render('login');
    }

}
module.exports = userController;