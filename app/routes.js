const express = require('express');
const router = express.Router();
const userController = require("./controller");


router.get("/apply",userController.get)
router.post("/apply",userController.create)

module.exports = router;