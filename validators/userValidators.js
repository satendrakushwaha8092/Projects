const { body } = require("express-validator");

exports.userValidation = [
  body("fname").not().isEmpty().withMessage("title is required"),

  body("lname").not().isEmpty().withMessage("lname is required"),

  body("phone").not().isEmpty().withMessage("phone is required"),

  body("email").not().isEmpty().withMessage("email is required"),

  body("password").not().isLength({min:6}).isEmpty().withMessage("enter strong password"),

  body("address").not().isEmpty().withMessage("address is required"),

  body("skills").not().isEmpty().withMessage("skills is required"),

  body("resume").not().isEmpty().withMessage("resume is required"),
];

exports.loginValidations=[
  body("email").not().isEmpty().withMessage("email is required"),

  body("password").not().isEmpty().withMessage("password is required"),

]

exports.updateValidations=[
  body("fname").not().trim().isEmpty().withMessage("title is required"),

  body("lname").not().isEmpty().withMessage("lname is required"),
  
  body("phone").not().isEmpty().withMessage("phone is required"),

  body("email").not().isEmpty().withMessage("email is required"),

  body("password").not().isLength({min:6}).withMessage("password is required"),

  body("address").not().isEmpty().withMessage("address is required"),

  body("skills").not().isEmpty().withMessage("skills is required"),

  body("resume").not().isEmpty().withMessage("resume is required"),
]
