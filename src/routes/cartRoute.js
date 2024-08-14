const express = require('express');
const { getCardByUser } = require('../controllers/cartController');
const { isLoggedIn } = require('../validation/authValidator');

const cartRouter = express.Router();

cartRouter.get('/',isLoggedIn,getCardByUser);

module.exports={
    cartRouter
}