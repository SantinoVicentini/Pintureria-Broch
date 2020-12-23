let bcrypt = require('bcryptjs');
const fs = require('fs');
var users = JSON.parse(fs.readFileSync(__dirname + '/../data/users.json'));
let {check, validationResult,body}= require('express-validator');
const { resourceUsage } = require('process');


const userController = {
    login: function(req, res, next) {
        res.render('login');
    },
    processlogin: function(req, res, next) {
        let errors = validationResult(req);
        if(errors.isEmpty()){
                                var users = JSON.parse(fs.readFileSync(__dirname + '/../data/users.json'));
                                let usuarioALoguearse
                                for (let i=0;i<users.length;i++){
                                    if(users[i].email== req.body.email ){
                                        if(bcrypt.compareSync(req.body.password, users[i].password)){
                                            usuarioALoguearse = users[i];
                                            break;
                                        }
                                    }
                                }
                                if (usuarioALoguearse == undefined){
                                res.render("login",{errors:[{msg:'Credenciales  Inválidas'}]});
                                                                }
                                req.session.userLogged = usuarioALoguearse;
                                res.redirect('/');
                  }else{
                         res.render("login",{errors:errors.errors});
                            }
    },
        register: function(req, res, next) {
        res.render('register');
    },
    perfil: function(req, res, next) {
        res.send('Este es mi perfil');
    },
    store: function(req,res,next){
            let errors = validationResult(req);
            if(errors.isEmpty()){
                                    var users1= {
                                                            first_name: req.body.fullName,
                                                            last_name: req.body.username,
                                                            email: req.body.email,
                                                            password: bcrypt.hashSync(req.body.password,10),
                                                            avatar: req.files[0].filename
                                                    };

                                          users.push(users1);
       
                                            let usersJSON = JSON.stringify(users);
                                            fs.writeFileSync(__dirname + '/../data/users.json', usersJSON);
                                            return res.redirect('/');                               
                                }       
            else
                                            {return res.render('register',{errors: errors.errors});}
                                }              
};                        
module.exports = userController;