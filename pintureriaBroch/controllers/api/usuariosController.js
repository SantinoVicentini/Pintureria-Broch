let db = require("../../database/models");


let usuariosController = {
list : function(req,res,next) {
    db.User.findAll()
    .then(function(usuarios){
        for(let i = 0; i < usuarios.length; i++)
        usuarios[i].setDataValue("endpoint", "/api/usuarios/" + usuarios[i].id)
        let respuesta = {
            meta: {
                status: 200,
                total: usuarios.length,
                url: "/api/usuarios"

            },
            data: usuarios,
        };
      res.json(respuesta)
  
    }).catch(function (error){
        console.log(error),
        res.send("Error de la página")
    
      })
  },
  find : function(req, res, next){
      db.User.findByPk(req.params.id)
      .then(function(user){
          res.json(user);
      })

      
  }

};

  module.exports = usuariosController;