const collegeService = require("../services/college.service");  //importing college service file
const db = require("../../models/index");  //importing models

exports.createCollegedata = async (req, res) => {
  const { name, fullName, phone, email } = req.body;
  const response = await collegeService.createCollege({
    name,
    fullName,
    phone,
    email,
  });
  return res
    .status(response.status)
    .json({ message: response.message, result: response.result });
};

exports.getCollegedata = async (req, res) => {
  const college = await db.College.findOne({where:{id:req.params.id}})
  const interns = await db.Intern.findAll({where:{collegeId:req.params.id}})
  let  intershipData= JSON.parse(JSON.stringify(college))
  intershipData.intersts=interns
  res.status(200).send({result:intershipData});
};
