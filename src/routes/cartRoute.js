const express = require('express');
const { getCardByUser, modifyProductToCart, clearCartbyId } = require('../controllers/cartController');
const { isLoggedIn } = require('../validation/authValidator');

const cartRouter = express.Router();

cartRouter.get('/',isLoggedIn,getCardByUser);

cartRouter.post('/:operation/:productId' , isLoggedIn , modifyProductToCart);

cartRouter.delete('/products',isLoggedIn,clearCartbyId);

module.exports={
    cartRouter
}