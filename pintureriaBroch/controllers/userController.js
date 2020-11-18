const userController = {
    login: function(req, res, next) {
        res.render('login');
    },
    register: function(req, res, next) {
        res.render('register');
    },
    perfil: function(req, res, next) {
        res.send('lEste es mi perfil');
    },
    create: function(req, res, next) {
        let usuarioIngresado = {
            nombre: req.body.fullName,
            apellido: req.body.username,
            email: req.body.email
        }
        res.send(usuarioIngresado);/*Acá iría un posible redireccionamiento*/
    },
    edit: function(req, res, next) {
        let idUser = req.params.idUser;
let users = [
    {id: 1, name: 'Santino'},
    {id: 2, name: 'Luciano'},
    {id: 3, name: 'Alexis'}
];
        let userToEdit = users[idUser];

        res.render("userEdit",{userToEdit: userToEdit});
    },
}
module.exports = userController;