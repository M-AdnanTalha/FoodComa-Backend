class UserService{

    constructor(_userRepository){
        this.userRepository = _userRepository;
    }

    async registerUser(userDetails) {
        console.log("Hitting Service Layer")
        // Check whether the email or phone number is already registerd or not
        const user = await this.userRepository.findUser({
            email: userDetails.email,
            mobileNumber: userDetails.mobileNumber
        });

        if(user){
            throw {reason : 'User with this email and mobile number already exists' , statusCode:400}
        }
        // If not then register the user
        const newUser = this.userRepository.createUser({
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
}

module.exports = UserService;

//vsftS2wc8XHRVGu3;.......................












































