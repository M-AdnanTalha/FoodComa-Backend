const express = require('express');
//const bodyParser = require('body-parser');
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const User = require('./schema/userSchema');
const userRouter = require('./routes/userRoute');
const { cartRouter } = require('./routes/cartRoute');


const app = express();

//CHECK FROM HERE 1:23:00
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.use('/users',userRouter); // Connects the router to the server
app.use('/cart',cartRouter); 

app.post('/ping',(req,res)=>{
    console.log(req.body);
    return res.json({message:"pong"});
})

app.listen(ServerConfig.PORT , async ()=>{
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}!!!`);

    // const newUser = await User.create({
    //     email:'a@b.com',
    //     password:'123456',
    //     firstName:"joe",
    //     lastName:"don",
    //     mobileNumber:'123456789'
    // });

    // console.log("Created a new user");
    // console.log(newUser);
});



//P5JmuB2ajLhnwMGL
//adnanad7077


//mongodb+srv://adnanad7077:P5JmuB2ajLhnwMGL@cluster0.jbvnv07.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0