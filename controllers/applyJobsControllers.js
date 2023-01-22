const service=require('../services/applyJobsService')

exports.create=async (req,res) => {
    const user_id=req.userData.userId
    const job_id=req.body.job_id
    const response=await service.create(user_id,job_id)
    res.status(response.status).send({message:response.message,result:response.result})
}

exports.get=async (req,res) => {
    const user_id=req.userData.userId
    const response=await service.get(user_id)
    res.status(response.status).send({message:response.message,result:response.result})
}