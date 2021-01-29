let fs = require('fs');

function recordameMiddleware(req,res,next){
    if(req.cookies.recordame !=undefined && req.session.userLogged == undefined){
        var users = db.User;
                                let usuarioALoguearse
                                for (let i=0;i<users.length;i++){
                                    if(users[i].email== req.cookies.recordame){
                                            usuarioALoguearse = users[i];
                                            break;
                                        }
                                    
                                }
                                req.session.userLogged = usuarioALoguearse;
    } 
    next ();
}
module.exports = recordameMiddleware;