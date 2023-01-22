const jobService = require('../services/jobServices')

exports.createJob = async (req,res) => {
    const data=req.body
    const response=await jobService.createJob(data)
    res.status(response.status).send({message:response.message,result:response.result})
}

exports.getJob = async (req, res) => {
    const pg=req.params.pg
    const response=await jobService.getJobs(pg)
    res.status(response.status).send({message:response.message,result:response.result})
}

exports.updateJob = async (req, res) => {
    const jobId=req.params.id;
    const data=req.body
    const response=await jobService.updateJob(data,jobId);
    res.status(response.status).send({message:response.message,result:response.result})
}

exports.deleteJob = async (req, res) => {
    const jobId=req.params.id;
    const response=jobService.deleteJob(jobId)
    res.status(response.status).send({message:response.message,result:response.result})
}