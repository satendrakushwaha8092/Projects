const db= require('../../models/users')
exports.create=async (req, res) => {
    try{
    const data=req.body
    console.log(data)  //
    const savedData=await db.users.create(data)
    res.status(201).send({savedData})
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