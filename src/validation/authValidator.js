const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/serverConfig');
const UnAuthorisedError = require('../utils/unauthorisedError');
const { decode } = require('punycode');
//deleted punycode - decode (probably was mistake)

async function isLoggedIn(req,res,next) {
    const token = req.cookies["authToken"];
    if(!token){
        return res.status(401).json({
            success:false,
            data:{},
            error:"Not Authenticated",
            message:"Auth Token not provided"
        });
    }

    try{
        const decoded = jwt.verify(token ,JWT_SECRET);

        if(!decoded){
            throw new UnAuthorisedError();
        }

        req.user = {
            email : decoded.email,
            id : decoded.id,
            role : decoded.role
        }

        next();
    }catch(error){
        return res.status(401).json({
            success:false,
            data:{},
            error:error,
            message:"Invalid Token provided"
        });
    }
    

    // If reached here then user is validated
    
    // Checking if the authenticated user is an admin or not
     
}

function isAdmin(req , res , next){
    const loggedInUser = req.user;
    if(loggedInUser.role == "ADMIN"){
        console.log("User is an admin");
        next();
    }else{
        return res.status(401).json({
            success : false,
            data:{},
            message : "You are not authorised for this action",
            error:{
                statusCode : 401,
                reason : "Unauthorised user for this action"
            }
        })
    }
}

module.exports={
    isLoggedIn,
    isAdmin
}