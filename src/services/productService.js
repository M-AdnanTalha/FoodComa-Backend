const cloudinary = require('../config/cloudinaryConfig')
const ProductRepository = require('../repositories/productRepositories')
const fs = require('fs/promises');
const InternalServerError = require('../utils/internalServerError');
const NotFoundError = require('../utils/notFoundError');

async function createProduct(productDetails) {
    // 1. We should check if an image is coming to create the product

    const imagePath = productDetails.imagePath;
    if(imagePath){
        try{
            const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
            var productImage = cloudinaryResponse.secure_url;
            await fs.unlink(imagePath)
        }catch(error){
            console.log(error)
            throw new InternalServerError();
        }
    }

    // 2.Then use the url from cloudinary and other product details to add product in DB
    const product = await ProductRepository.createProduct({
        ...productDetails,
        productImage: productImage
    });

    return product;
}

async function getProductByID(productID) {
    const response = await ProductRepository.getProductByID(productID);
    if(!response){
        throw new NotFoundError('Product');
    }
    return response;
}

async function deleteProductByID(productID) {
    const response = await ProductRepository.deleteProductByID(productID);
    if(!response){
        throw new NotFoundError('Product');
    }
    return response;
}

module.exports = {
    createProduct,
    getProductByID,
    deleteProductByID
}