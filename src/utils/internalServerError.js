const AppError = require('./appError')

class InternalServerError extends AppError{
    constructor(){
        super(`It's not you , It's us :(`,500);
    }
}

module.exports = InternalServerError;