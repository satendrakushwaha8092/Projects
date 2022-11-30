const express = require("express");
const router = express.Router();
const employee_controller = require("../controllers/employee.controller");
const {
  createEmployeeRules,
  createLoginRules,
  validate,
} = require("../../app/validatores/create.employee.validator");
const auth = require("../../app/middleware/auth");
//const forget=require('../../app/middleware/forgetpassword')

router.post(
  "/employee",
  createEmployeeRules(),
  validate,
  employee_controller.sign_up
);
router.post(
  "/login",
  createLoginRules(),
  validate,
  employee_controller.sign_in
);
router.get("/employee", employee_controller.get);
router.put("/employee/:id", auth.auth, employee_controller.update);
router.delete("/employee/:id", auth.auth, employee_controller.delete);
router.get(
  "/forgetpassword",
  employee_controller.forgetpassword,
  employee_controller.setpassword
);
router.post("/setpassword", employee_controller.setpassword);

module.exports = router;
