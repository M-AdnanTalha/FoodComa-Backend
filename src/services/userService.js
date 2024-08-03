const { findUser, createUser } = require("../repositories/userRepository");


    async function registerUser(userDetails) {
        console.log("Hitting Service Layer")
        // Check whether the email or phone number is already registerd or not
        const user = await findUser({
            email: userDetails.email,
            mobileNumber: userDetails.mobileNumber
        });

        if(user){
            throw {reason : 'User with this email and mobile number already exists' , statusCode:400}
        }
        // If not then register the user
        const newUser = await createUser({
            email:userDetails.email,
            firstName:userDetails.firstName,
            lastName:userDetails.lastName,
            mobileNumber:userDetails.mobileNumber,
            password:userDetails.password
        })

        if(!newUser){
            throw {reason:'New User cannot be created', statusCode:500}
        }
        // Return the details of the user
        return newUser;
    }

module.exports = {
    registerUser
}

//vsftS2wc8XHRVGu3;.......................












































