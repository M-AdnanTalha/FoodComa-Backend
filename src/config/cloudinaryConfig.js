const { CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_SECRET } = require('./serverConfig');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    api_key : CLOUDINARY_API_KEY,
    cloud_name : CLOUDINARY_CLOUD_NAME,
    api_secret : CLOUDINARY_API_SECRET
})
module.exports = cloudinary;