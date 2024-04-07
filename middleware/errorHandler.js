const {constants} = require("../constants");
const errorHandler=(err,req,res,next)=>{
    const statusCode= res.statusCode? this.res.statusCode : 500;
    //500 will be the server error 

    switch (statusCode) {
        case constants.VALIDATION_ERROR:res.json({title: "validation failed",message: err.message, stackTrace:error.stack}); break;
        case constants.NOT_FOUND:res.json({title: "Not found",message: err.message, stackTrace:error.stack}); break;
        case constants.UNAUTHORIZED_ERROR:res.json({title: "authorization failed",message: err.message, stackTrace:error.stack}); break;
        case constants.SERVER_ERROR:res.json({title: "server conn failed",message: err.message, stackTrace:error.stack}); break;
        default:      break;
    }
    

 
    
};
module.exports= errorHandler;