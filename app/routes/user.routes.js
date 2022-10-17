const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { createUserRules, validate } = require('../validaters/create-user.validation');


router.post("/user",createUserRules(),validate, userController.createUser);
router.get("/user", userController.findUsers);
router.get("/user/:id", userController.getUserById);

module.exports = router;
