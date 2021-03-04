const fs = require("fs");
const path = require("path");
const db = require("../database/models");

function recordameMiddleware(req,res,next){
    if (req.cookies.recordame != undefined && 
        req.session.userLogged == undefined) {

            db.User.findOne({
                where: {
                    email: req.cookies.recordame
                }
            }).then(users => {
                req.session.uerLogged= users
            });
    }

    next();
}
module.exports = recordameMiddleware; 