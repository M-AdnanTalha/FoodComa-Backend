const mongoose = require('mongoose')
const { type } = require('os')

const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product',
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
                default:1
            }
        }
    ],
}, {
    timestamps:true
});

const Cart = mongoose.model('Cart',cartSchema);

module.exports = Cart;