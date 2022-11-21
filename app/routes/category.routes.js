const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");
const {
  createCategoryRules,
  validate,
} = require("../validators/create-caregory.validator");

router.post(
  "/category",
  createCategoryRules(),
  validate,
  categoryController.create
);
router.get("/category", categoryController.get);
router.put("/category/:categoryId", categoryController.update);
router.delete("/category/:id", categoryController.delete);

module.exports = router;
