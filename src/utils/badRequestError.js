const AppError = require("./appError");

class BadRequestError extends AppError{
    constructor(invalidParams){
        //invalidParams = []

        let message = '';
        invalidParams.forEach(params => message += `${params}\n`);
        
        super(`The request has the follwing invalid parameters ${invalidParams}`,400);
    }
}

module.exports = BadRequestError;