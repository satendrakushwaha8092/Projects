const express=require('express');
const router=express.Router();
const controller=require('./controller')
const service=require('./service')

router.post('/url',controller.create)

router.get('/:urlCode',service.getUrl)

module.exports =router;