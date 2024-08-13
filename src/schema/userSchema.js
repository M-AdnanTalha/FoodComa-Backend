const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"First Name is Required"],
        trim:true,
        minlength:[2,"First Name should at least be 2 characters"],
        maxlength:[20,"First Name should be less than or equal to 20 characters"],
        lowercase:true
    },

    lastName:{
        type:String,
        required:[true,"Last Name is Required"],
        trim:true,
        minlength:[2,"Last Name should at least be 2 characters"],
        maxlength:[20,"Last Name should be less than or equal to 20 characters"],
        lowercase:true
    },

    mobileNumber:{
        type:String,
        required:[true,"Mobile Number is Required"],
        trim:true,  //Removes any extra space automatically
        unique:[true,"Number already in use"]
    },

    email:{
        type:String,
        required:[true,"Email is Required"],
        trim:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Enter a Valid Email"],
        unique:[true,"Email already registered"]
    },

    password:{
        type:String,
        required:[true,"Password is Required"],
        minlength:[6,"Password should atleast be of 6 characters"]
    },
    role:{
        type : String,
        enum : ["USER","ADMIN"],
        default : "USER"
    }
},{
    timestamps:true
});

userSchema.pre('save', async function(){
    const hashedPassword = await bcrypt.hash(this.password,10);
    this.password = hashedPassword;
})

const User = mongoose.model("User",userSchema);

module.exports = User;