const { body, validationResult } = require("express-validator");
const createUserRules = () => {
  return [
    body("fname").notEmpty(),
    body("lname").notEmpty(),
    body("email").notEmpty().isEmail(),
    body("phone").notEmpty(),
    body("password").notEmpty()
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  createUserRules,
  validate,
};
