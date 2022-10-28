const internService = require("../services/intern.service");
const db = require("../../models/index");

exports.createInterndata = async (req, res) => {
  const { name,email, phone,collegeId} = req.body;
  const response = await internService.createIntern({
    name,
    email,
    phone,
    collegeId,
  });
  return res
    .status(response.status)
    .json({ message: response.message, result: response.result });
};

exports.getInterndata = async (req, res) => {
    const response = await db.Interns.findAll();
    res.status(200).send({ result:response});
  };
  
