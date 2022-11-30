const express = require("express");
const router = express.Router();
const {
  createCourseRules,
  validate,
} = require("../../app/validatores/create.course.validator");
const course_controller = require("../controllers/course.controller");
const auth = require("../middleware/auth");

router.post(
  "/course",
  auth.auth,
  createCourseRules(),
  validate,
  course_controller.create
);
router.get("/course", course_controller.get);
router.put("/course/:id", auth.auth, course_controller.update);
router.delete("/course/:id", auth.auth, course_controller.delete);

module.exports = router;
