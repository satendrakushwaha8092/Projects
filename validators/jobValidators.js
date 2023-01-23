const { body } = require("express-validator");

exports.jobValidation = [
  body("title")
    .not()
    .isEmpty()
    .withMessage("title is required")
    .withMessage("Invalid User Type"),

  body("description")
    .not()
    .isEmpty()
    .withMessage("description is required"),

  body("eligiblity")
    .not()
    .isEmpty()
    .withMessage("eligiblity is required"),

  body("package")
    .not()  
    .isEmpty()
    .withMessage("pakage is required"),

  body("location")
    .not()
    .isEmpty()
    .withMessage("location is required"),
];
