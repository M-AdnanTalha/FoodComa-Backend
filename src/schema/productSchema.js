const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type : String,
        required : [true , "Product Name is required"],
        minLength : [3 , "Product name should be atleast 3 characters"],
        trim : true
    },
    description:{
        type: String,
        minLength : [5 , "Description must be atleast 5 characters"]
    },
    productImage:{
        type:String,
    },
    quantity:{
        type : Number,
        required:true,
        default:10
    },
    price:{
        type:String,
        required:[true , "Product price is required"],
    },
    category:{
        type:String,
        enum:["veg","non-veg","drinks","sides"],
        default:"veg",
    },
    inStock:{
        type:Boolean,
        required:[true , "In Stock status is required"],
        default:true
    }
}, {
    timestamps:true
});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;
