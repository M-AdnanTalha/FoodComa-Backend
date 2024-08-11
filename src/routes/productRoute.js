const express = require('express');
const uploader = require('../middlewares.js/multerMiddleware');
const { addProduct, getProduct, deleteProduct } = require('../controllers/productControllers');

const productRouter = express.Router();

productRouter.post('/',uploader.single('productImage'),addProduct);

productRouter.get('/:id',getProduct);
productRouter.delete('/:id',deleteProduct);

module.exports = productRouter;