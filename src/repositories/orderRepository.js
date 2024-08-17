const Order = require('../schema/orderSchema');
const BadRequestError = require('../utils/badRequestError');
const InternalServerError = require('../utils/internalServerError');

async function createNewOrder(orderDetails){
    try{
        const order = await Order.create(orderDetails);
        return order;
    }catch(error){
        if(error.name === 'ValidationError'){
            const errorMessageList = Object.keys(error.errors).map((property)=>{
                return error.errors[property].message;
            })
            throw new BadRequestError(errorMessageList)
        }
        console.log(error);
        throw new InternalServerError();
    }
}

module.exports = {
    createNewOrder
}