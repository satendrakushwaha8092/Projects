const db = require("../../models/index");
const service = require(".././services/course.services");

exports.create = async (req, res) => {
  console.log(req.employee);
  const response = await service.create(req.body, req.employee.role);
  res
    .status(response.status)
    .send({ message: response.message, result: response.result });
};

exports.get = async (req, res) => {
  const response = await db.course.findAll({
    where: { permission: "super_admin" },
  });
  res.send(response);
};

exports.update = async (req, res) => {
  const course_id = req.params.id;
  const role = req.employee.role;
  const response = await service.update(req.body, course_id, role);
  res
    .status(response.status)
    .send({ message: response.message, result: response.result });
};

exports.delete = async (req, res) => {
  const course_id = req.params.id;
  const role = req.employee.role;
  const response = await service.delete(course_id, role);
  res
    .status(response.status)
    .send({ message: response.message, result: response.result });
};
