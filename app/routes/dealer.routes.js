const express = require("express");
const router = express.Router();
const dealerController = require("../controllers/dealers.controller");
const {
  createDealerRules,
  validate,
} = require("../validators/create-dealers.validator");

router.post("/dealer", createDealerRules(), validate, dealerController.create);
router.get("/dealer", dealerController.get);
router.post("/login", dealerController.login);
router.put("/dealer/:dealerId", dealerController.update);
router.delete("/dealer/:id", dealerController.delete);

module.exports = router;
