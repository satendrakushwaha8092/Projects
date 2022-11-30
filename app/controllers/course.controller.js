const db = require("../../models/index");
const service = require(".././services/course.services");

exports.create = async (req, res) => {
  const {
    title,
    description,
    video_Url,
    topics,
    duration,
    category,
    permission,
  } = req.body;

  const response = await service.create(
    {
      title,
      description,
      video_Url,
      topics,
      duration,
      category,
      permission,
    },
    req.employee.role
  );
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
  const {
    title,
    description,
    video_Url,
    topics,
    duration,
    category,
    permission,
  } = req.body;
  const course_id = req.params.id;
  const role = req.employee.role;
  const response = await service.update(
    {
      title,
      description,
      video_Url,
      topics,
      duration,
      category,
      permission,
    },
    course_id,
    role
  );
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
