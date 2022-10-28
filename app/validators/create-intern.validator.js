const { body, validationResult } = require("express-validator");
const createInternRules = () => {
  return [
    body("name").notEmpty(),
    body("email").notEmpty().isEmail(),
    body("phone").notEmpty(),
    body("collegeId").notEmpty(),
  ];
};

const validate = (req, res, next) => {
    console.log(req.body);  //
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
  createInternRules,
  validate,
};
