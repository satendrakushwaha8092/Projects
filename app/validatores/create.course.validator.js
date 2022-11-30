const { body, validationResult } = require("express-validator");
const createCourseRules = () => {
  return [
    body("title").notEmpty(),
    body("description").notEmpty(),
    body("video_Url").notEmpty(),
    body("topics").notEmpty(),
    body("duration").notEmpty(),
    body("category").notEmpty(),
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
  createCourseRules,
  validate,
};
