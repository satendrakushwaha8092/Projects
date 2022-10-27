const express=require('express');
const router=express.Router();
const controller=require('./controller')

router.post('/url',controller.create)

router.get('/url',controller.get)

router.get('/:urlCode',controller.getUrl)


module.exports =router;