const Joi = require('joi');

Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    passwordConfirm: Joi.ref('password')
})
