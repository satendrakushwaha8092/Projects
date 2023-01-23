const db = require("../models/index");

exports.createJob = async (data) => {
  const response = await db.sequelize.query(
    `INSERT INTO jobs ("title","description","eligiblity","package","location","createdAt","updatedAt")
  VALUES  ('${data.title}', '${data.description}','${data.eligiblity}','${data.package}','${
    data.location
  }','${new Date().toISOString()}','${new Date().toISOString()}')`);
  return {
    status: 201,
    message: "job created successfully",
    result: response,
  };
};

exports.getJobs = async () => {
    const response = await db.sequelize.query(`select * from jobs where "deletedAt" is null`)
    return {
      status: 200,
      message: "successfull",
      result: response[0],
    };
};

exports.updateJob = async (data, jobId) => {
    const user = await db.sequelize.query(
        `select * from jobs where "id"='${jobId}' and "deletedAt" is null`
      );
      if (!user[0].length)
        return {
          status: 400,
          message: "job not present",
          result: null,
        };
    for (const [key, value] of Object.entries(data)) {
        await db.sequelize.query(`update jobs set "${key}"='${value}' where "id"='${jobId}'`)
      }
  return {
    status: 200,
    message: "job updated successfullly",
    result: null,
  };
};

exports.deleteJob = async (jobId) => {
    const job = await db.sequelize.query(
        `select * from jobs where "id"='${jobId}' and "deletedAt" is null`
      );
      if (!job[0].length)
        return {
          status: 404,
          message: "job not present",
          result: null,
        };
    await db.sequelize.query(
      `update jobs set "deletedAt"='${new Date().toISOString()}' where "id"='${jobId}'`
    )
      return {
    status: 200,
    message: "job deleted successfully",
    result: null,
  };
};
