const express = require('express');
const { getCardByUser, modifyProductToCart } = require('../controllers/cartController');
const { isLoggedIn } = require('../validation/authValidator');

const cartRouter = express.Router();

cartRouter.get('/',isLoggedIn,getCardByUser);

cartRouter.post('/:operation/:productId' , isLoggedIn , modifyProductToCart);

module.exports={
    cartRouter
}