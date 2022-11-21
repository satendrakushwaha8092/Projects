const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const {
  createProductRules,
  validate,
} = require("../validators/create-product.validator");
const middleware = require("../middleware/auth");

router.post(
  "/product",
  createProductRules(),
  validate,
  middleware.auth,
  productController.create
);

router.get("/product/:id", productController.get);
router.get("/product", productController.getProductByQuery);
router.put("/product/:productId", productController.update);
router.delete("/product/:id", productController.delete);

module.exports = router;
