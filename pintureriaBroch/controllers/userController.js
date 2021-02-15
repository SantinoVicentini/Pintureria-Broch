let bcrypt = require('bcryptjs');
const { name } = require('ejs');
const fs = require('fs');
/*const saltRounds = 10;*/
//const user = JSON.parse(fs.readFileSync(__dirname + '/../data/users.json'));
let {check, validationResult,body}= require('express-validator');
//const { resourceUsage } = require('process');
//const { index } = require('./indexController');
const db = require("../database/models");



const userController = {

  // COMIENZO CRUD BASE DE DATOS
  index : function(req,res,next) {
    db.User.findAll()
    .then(function(users){
      res.render('userList',{users:users})
  
    }).catch(function (error){
      console.log(error),
      res.send("Error de la página")
  
    })
  },

  showRegisterForm : (req, res, next) => {
    res.render('register');
  },

  register : (req, res, next) => {

   bcrypt.hash(req.body.password, saltRounds, function (err,hash) {
      db.User.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar:req.body.avatar,
        }).then(function(data) {
         if (data) {
         res.redirect('/');
         }
       });
      });


   /* db.User.create(req.body),
    res.send("Bienvenido a la familia de Pinturería Broch")
    console.log(req.body);*/
  },

  showProfile : (req,res, next) => {
    db.User.findByPk(req.params.id)
    .then(function (users) {
      res.render('userProfile', {users});
    }).catch(function (error) {
      console.log(error),
        res.send("Error de la página");

    });

  },

  showLoginForm : (req,res, next) => {
  res.render('login');
  },

  login : (req,res, next) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){

        db.User.findOne({
                                where: {
                                  email: req.body.email,
                                }
                              })
                              .then(function (users) 
                              {
                                                      if (!users) {
                                                        res.render("login",{errors:[{msg:'Email no registrado'}]});
                                                        /*res.redirect ("/users/register")*/
                                                                  }
                                else{    

/*LA CONTRASEÑA DE LOGUEADO NO ESTA HASHEADA*/                            
                         bcrypt.compare(req.body.password, users.password, function (err, result) {
                                          if (result == true) {
                                              res.redirect('/');
                                          } else {
                                          res.redirect('/users/login');
                                          }
                                        });
}
                              /* res.render('userProfile', {users});*/
                              }).catch(function (errors) {
                                console.log(errors),
                                  res.send("Error de la página");

                              });
                      }else{
                        res.render("login",{errors:errors.errors});
                        }
                  
},

  edit: function(req,res,next) {
  db.User.findByPk (req.params.id)
    .then(function(resultado) {
        res.render ("edicionUsuario", {resultado:resultado})
    })

},

update: function (req,res,next) {
    db.User.update ({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar,
    }, {
        where: {
            id: req.params.id,
        }
    });
    res.redirect("/users/" + req.params.id);
},

delete: function (req,res,next) {
  db.User.destroy ({
    where: {
      id: req.params.id,
    }
  });

  res.redirect("/users/register");
},

  // FIN CRUD BASE DE DATOS
/* 

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

                                if(req.body.recordame !=undefined){
                                    res.cookie('recordame',usuarioALoguearse.email,{maxAge:60000})
                                }
                                res.redirect('../');
                  }else{
                         res.render("login",{errors:errors.errors});
                            }
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
},
                        
*/
};
module.exports = userController;