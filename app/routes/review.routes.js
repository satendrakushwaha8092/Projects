const express= require('express')
const router= express.Router();
const auth= require('../middleware/auth');
const reviewController=require('../controllers/review.controller')
router.post('/review',reviewController.create)
module.exports =router