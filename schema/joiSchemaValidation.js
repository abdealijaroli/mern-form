const Joi = require('joi');

const register = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required()
});

module.exports.validateUserSchema = (data) => {
   const result = register.validate(data, { convert: false });
   if (result.error) {
       const errorDetails = result.error.details.map(value => {
           return {
               error: value.message,
           };
       });
       console.log(errorDetails);
   }
   return null;
}