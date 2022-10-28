const { body, validationResult } = require("express-validator");
const createUserRules = () => {
  return [
    body("title").notEmpty(),
    body("name").notEmpty(),
    body("phone").notEmpty(),
    body("email").notEmpty().isEmail(),
    body("password").notEmpty(),
    body("address").notEmpty(),
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
