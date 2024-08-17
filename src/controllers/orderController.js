const AppError = require("../utils/appError");
const {createOrder} = require('../services/orderService')

async function createNewOrder(req , res){
    try{
        const order = await createOrder(req.user.id , req.body.paymentMethod);
        return res.status(201).json({
            success:true,
            message:"Successfully created the order",
            error:{},
            data:order
        })
    }catch(error){
        console.log(error);
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                success:false,
                message:error.message,
                data:{},
                error:error
            });
        }
        
            return res.status(500).json({
                success:false,
                message:'Something went wrong',
                data:{},
                error:error
            });
    }
}

module.exports = {
    createNewOrder
}