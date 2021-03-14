function loginMiddleware(req,res,next){
    if ( req.session.userLogged != undefined){
        next();
      }else{
        res.render("error",{errors:[{msg:'Solamente los usuarios pueden ver esta pagina'}]});
}
}
module.exports = loginMiddleware;