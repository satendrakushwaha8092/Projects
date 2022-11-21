const { body, validationResult } = require("express-validator");
const createDealerRules = () => {
  return [
    body("first_name").notEmpty(),
    body("last_name").notEmpty(),
    body("age").notEmpty(),
    body("gender").notEmpty(),
    body("email").notEmpty().isEmail(),
    body("password").notEmpty(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
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
  createDealerRules,
  validate,
};
