const db=require('../models/index')

exports.create = async (user_id,job_id) => {
  const job=await db.jobs.findOne({where: {id:job_id}})
  if(!job)return {
    status: 404,
    message: "job not present",
    result: null,
  }

  const applied=await db.applied_jobs.findOne({where: {job_id:job_id,user_id:user_id}})
  if(applied)
  return {
    status: 400,
    message: "already apply for this job",
    result: null,
  }
    const response= await db.applied_jobs.create({user_id:user_id,job_id:job_id})
    return {
        status: 200,
        message: "successfullly",
        result: response,
      }
}

exports.get = async (userId) => {
  const user=await db.users.findOne({where: {id:userId}})
  if(!user)return {
    status: 404,
    message: "user not present",
    result: null,
  }
    const response = await db.applied_jobs.findAll({
      where:{user_id:userId},
      include: [
        {
          model:db.jobs
        },
        {
          model: db.users
        }  
      ],
    })
    return {
        status: 200,
        message: "successfullly",
        result: response,
      }
}