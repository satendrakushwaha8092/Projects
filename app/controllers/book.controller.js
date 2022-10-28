const db= require('../../models/index')
const service=require('../services/book.service')

exports.create = async (req, res) => {
    const response=await service.create(req.body)
    res.status(response.status).send({message: response.message,result:response.result})
}