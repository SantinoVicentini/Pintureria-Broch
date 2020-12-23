function guestMiddleware(req,res,next){
    if ( req.session.userLogged == undefined){
        next();
      }else{
          res.send('Solo para invitados');
}
}
module.exports = guestMiddleware;