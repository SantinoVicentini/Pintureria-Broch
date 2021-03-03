const fs = require("fs");
const path = require("path");
const db = require("../database/models");

function recordameMiddleware(req,res,next){
    if (req.cookies.recordame != undefined && 
        req.session.usuarioLogueado == undefined) {

            db.User.findOne({
                where: {
                    email: req.cookies.recordame
                }
            }).then(users => {
                req.session.usuarioLogueado = users
            });
    }

    next();
}
module.exports = recordameMiddleware; 