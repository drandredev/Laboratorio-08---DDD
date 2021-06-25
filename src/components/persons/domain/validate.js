import Joi from 'joi'

export const schemaName = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(1)
    .max(100)
    .required(),
  number: Joi.number()
    .integer()
    .min(1)
    .max(999999999)
})
