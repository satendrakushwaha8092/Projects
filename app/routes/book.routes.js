const express= require('express')
const router= express.Router();
const auth= require('../middleware/auth');
const bookController=require('../controllers/book.controller')
router.post('/book',auth.authorization,bookController.create)
module.exports =router