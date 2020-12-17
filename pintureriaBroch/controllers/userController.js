let bcrypt = require('bcryptjs');
const fs = require('fs');
var users = JSON.parse(fs.readFileSync(__dirname + '/../data/users.json'));


const userController = {
    login: function(req, res, next) {
        res.render('login');
    },
    register: function(req, res, next) {
        res.render('register');
    },
    perfil: function(req, res, next) {
        res.send('Este es mi perfil');
    },
    create: function(req,res,next){
        var users1 = {
            first_name: req.body.fullName,
            last_name: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,10),
            avatar: req.body.avatar
        };
        users.push(users1);
       
        let usersJSON = JSON.stringify(users);
        fs.writeFileSync(__dirname + '/../data/users.json', usersJSON);
        return res.redirect('/'); }
    
}
module.exports = userController;