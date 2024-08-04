const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/serverConfig');
const { decode } = require('punycode');

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

    const decoded = jwt.verify(token , JWT_SECRET);
    if(!decoded){
        return res.status(401).json({
            success:false,
            data:{},
            error:"Not authenticated",
            message:"Invalid Token provided"
        })
    }

    // If reached here then user is validated
    req.user = {
        email:decoded.email,
        id:decoded.id
    }
    
    next();
}

module.exports={
    isLoggedIn
}