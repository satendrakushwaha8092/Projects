const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/user", userController.createUser);
router.get("/user", userController.findUsers);
router.get("/user/:id", userController.getUserById);

module.exports = router;
