import Joi from "joi";

export const itemSchema = Joi.object({
  name: Joi.string().max(100).required(),
  description: Joi.string().max(500).optional(),
  price: Joi.number().positive().required(),
});
