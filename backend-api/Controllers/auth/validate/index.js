const User = require("../../../models/User");
const Joi = require("joi");

/**
 * Check if user account exist by username.
 * @async
 * @function validateUsername
 * @param {string} username - The username of the user.
 * @return {boolean} If the user has an account.
 */
const validateUsername = async (username) => {
  let user = await User.findOne({ username });
  return user ? false : true;
};

/**
 * Check if user account exist by email.
 * @async
 * @function validateEmail
 * @param {string} email - The email of the user.
 * @return {boolean} If the user has an account.
 */
const validateEmail = async (email) => {
  let user = await User.findOne({ email });
  return user ? false : true;
};

/**
 * Sets a validation schema for signup request body.
 * @const adminSignupSchema
 */
const adminSignupSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z ]+$/)
    .min(2)
    .required()
    .messages({
      "string.pattern.base": "Name should only contain alphabets and spaces",
    }),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .min(8)
    .required(),
});

/**
 * Sets a validation schema for login request body.
 * @const loginSchema
 */
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

/**
 * Sets a validation schema for login request body.
 * @const FreelancerSignupSchema
 */

const FreelancerSignupSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z ]+$/)
    .min(2)
    .required()
    .messages({
      "string.pattern.base": "Name should only contain alphabets and spaces",
    }),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  postcode: Joi.string().required().length(6),
  address: Joi.string().required(),
});

/**
 * Sets a validation schema for login request body.
 * @const ClientSignupSchema
 */

const ClientSignupSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z ]+$/)
    .min(2)
    .required()
    .messages({
      "string.pattern.base": "Name should only contain alphabets and spaces",
    }),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  company: Joi.string().required(),
});

module.exports = {
  validateEmail,
  validateUsername,
  adminSignupSchema,
  loginSchema,
  FreelancerSignupSchema,
  ClientSignupSchema
};
