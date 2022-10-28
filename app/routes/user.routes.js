const express= require('express')
const router= express.Router();
const userController= require('../controllers/user.controller')
const {createUserRules,validate}= require('../validators/create-user.validator')
router.post('/register',createUserRules(),validate,userController.register)
router.post('/login',userController.login)
router.get('/user',userController.get)

module.exports =router