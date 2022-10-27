const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { createUserRules, validate } = require('../validaters/create-user.validation');
const auth= require('../middleware/auth')
const multer=require('multer');
const upload = multer({ dest: 'profileImage' })

//
router.post("/user",upload.single('profileimage'),createUserRules(),validate,userController.createUser);
router.get("/user", userController.findUsers);
router.get("/user/:id",auth.auth, userController.getUserById);
router.post("/login",userController.login);
router.put("/user/:id",auth.auth,userController.updatedUser)

module.exports = router