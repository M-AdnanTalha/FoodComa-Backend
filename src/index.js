const express = require('express');
const cookieParser = require('cookie-parser');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const User = require('./schema/userSchema');
const userRouter = require('./routes/userRoute');
const { cartRouter } = require('./routes/cartRoute');
const authRouter = require('./routes/authRoute');
const { isLoggedIn } = require('./validation/authValidator');
const uploader = require('./middlewares.js/multerMiddleware');
const cloudinary = require('./config/cloudinaryConfig');
const fs = require('fs/promises');
const productRouter = require('./routes/productRoute');
const orderRouter = require('./routes/orderRoutes');


const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));


app.use('/users',userRouter); // Connects the router to the server
app.use('/cart',cartRouter); 
app.use('/auth',authRouter);
app.use('/products',productRouter);
app.use('/orders',orderRouter);

app.get('/ping',isLoggedIn,(req,res)=>{
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message:"pong"});
})

app.post('/photo',uploader.single('incomingFile'),async(req,res)=>{
    console.log(req.file);
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log("result from cloudinary",result);
    await fs.unlink(req.file.path)
    return res.json({
        message:"OK"
    })
})

app.listen(ServerConfig.PORT , async ()=>{
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}!!!`);

});



//P5JmuB2ajLhnwMGL
//adnanad7077


//mongodb+srv://adnanad7077:P5JmuB2ajLhnwMGL@cluster0.jbvnv07.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0