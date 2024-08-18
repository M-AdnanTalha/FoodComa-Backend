const express = require('express');
const {isLoggedIn, isAdmin} = require('../validation/authValidator');
const { createNewOrder, getAllOrderByUser, getOrder, cancelOrder, changeOrderStatus } = require('../controllers/orderController');

const orderRouter = express.Router();
orderRouter.post('/' , isLoggedIn , createNewOrder);
orderRouter.get('/' , isLoggedIn , getAllOrderByUser);
orderRouter.get('/:orderId' , isLoggedIn , getOrder);
orderRouter.put('/:orderId/cancel' ,isLoggedIn , cancelOrder );
orderRouter.put('/:orderId/status' , isLoggedIn , isAdmin, changeOrderStatus);

module.exports = orderRouter;