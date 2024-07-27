const express = require('express');
const { getCardbyID } = require('../controllers/cartController');

const cartRouter = express.Router();

cartRouter.get('/:id',getCardbyID);

module.exports={
    cartRouter
}