function adminMiddleware(req,res,next){
    if ( req.session.userLogged.email == 'administrador@broch.com'){
        next();
      }else{
          res.send('Solo Administrador');
}
}
module.exports = adminMiddleware;