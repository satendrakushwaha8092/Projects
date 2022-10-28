const db= require('../../models/index')
const service=require('../services/user.service')
exports.register=async (req, res) => {
    try{
    const data=req.body
    const response=await service.create(data)
    res.status(response.status).send({message:response.message,result:response.result})
    }catch(err){
        res.status(500).send({err:err.message})
    }
}

exports.login=async (req, res) =>{
    try{
        const data=req.body
        const response=await service.login(data)
        res.status(response.status).send({message:response.message,result:response.result})
        }catch(err){
            res.status(500).send({err:err.message})
        }
}

exports.get=async (req, res) => {
    try{
    const data=await db.users.findAll()
    res.status(200).send(data)
    }catch(err){
        res.status(500).send({err:err.message})
    }
}