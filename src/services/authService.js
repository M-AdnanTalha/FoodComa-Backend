const {findUser} = require('../repositories/userRepository')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {JWT_EXPIRY,JWT_SECRET} = require('../config/serverConfig');

async function loginUser(authDetails){
    const email = authDetails.email;
    const plainPassword = authDetails.password;

    // 1. Check if there is a registered user with the given email
    const user = await findUser({email});

    if(!user){ //If no user is found
        throw {message:"No User Found with given Mail",statusCode:404}
    } 

    // 2. If the user is found we need to compare plainIncoming Password with hashed password
    const isPasswordValidated = await bcrypt.compare(plainPassword , user.password);

    if(!isPasswordValidated){
        throw {message:"Invalid password please try again",statusCode:401};
    }

    const userRole = user.role?user.role:"USER";

    // 3. If the password is validated,create a token and return it
    const token = jwt.sign({email : user.email , id : user._id , role: userRole }, JWT_SECRET,{
        expiresIn:JWT_EXPIRY
    });
    return token;
}

module.exports = {
    loginUser
}