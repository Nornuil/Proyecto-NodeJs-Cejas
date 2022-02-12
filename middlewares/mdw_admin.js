//valida si es admin
const isAdmin =(req,res,next)=>{
    // console.log("pasa por mdw");    
    next();
    // res.send("No es administrador");
  }
  
module.exports = {isAdmin};