function loginMiddleware(req,res,next){
    if ( req.session.userLogged != undefined){
        next();
      }else{
          res.send('Solo para usuarios');
}
}
module.exports = loginMiddleware;