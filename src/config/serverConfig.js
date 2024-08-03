const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL,
    JWT_EXPIRY : process.env.JWT_EXPIRY,
    JWT_SECRET : process.env.JWT_SECRET
}