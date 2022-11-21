const { body, validationResult } = require("express-validator");
const createCategoryRules = () => {
  return [body("category").notEmpty()];
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
  createCategoryRules,
  validate,
};
