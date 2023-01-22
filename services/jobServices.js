const db=require('../models/index')

exports.createJob=async (data) => {
    const response=await db.jobs.create(data)
    return{
        status: 201,
        message: "job created successfully",
        result:response
    }
}

exports.getJobs=async (pg) => {
    const response=await db.jobs.findAll({
        offset: 3 * (pg - 1),
        limit: 3,
        attributes: {
          exclude: ["id", "createdAt", "updatedAt", "deletedAt"],
        },
        order: [
            ['id', 'DESC']
        ]
    })
    return{
        status: 200,
        message: "successfull",
        result:response
    }
}

exports.updateJob =async (data,jobId) => {
    const response=await db.jobs.update(data,{where:{id:jobId}})
    return{
        status: 200,
        message: "job updated successfullly",
        result:response
    }
}

exports.deleteJob=async (jobId) => {
    const response = await db.jobs.destroy({where:{id:jobId}})
    return{
        status: 200,
        message: "job deleted successfully",
        result:null
    }
}