const Joi = require("joi");

exports.storeBid = Joi.object()
  .keys({
    cents: Joi.number()
      .min(1)
      .required(),
    userId: Joi.string()
      .required()
  });