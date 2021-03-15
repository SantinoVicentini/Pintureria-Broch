function adminMiddleware(req,res,next){
    if ( req.session.userLogged.email == 'administrador@broch.com'){
        next();
      }else{
        res.render("error",{errors:[{msg:'Usted no tiene acceso'}]});
}
}
module.exports = adminMiddleware;