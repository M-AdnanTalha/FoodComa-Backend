const express = require('express');
const uploader = require('../middlewares.js/multerMiddleware');
const { addProduct } = require('../controllers/productControllers');

const productRouter = express.Router();

productRouter.post('/',uploader.single('productImage'),addProduct);

module.exports = productRouter;