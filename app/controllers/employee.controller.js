const db = require("../../models/index");
const service = require(".././services/employee.services");
const nodemailer = require("../nodemailer/nodemailer");

exports.sign_up = async (req, res) => {
  const { name, email, password, role } = req.body;
  const response = await service.create({ name, email, password, role });
  res
    .status(response.status)
    .send({ message: response.message, result: response.result });
};

exports.get = async (req, res) => {
  const response = await db.employee.findAll();
  res.send(response);
};

exports.update = async (req, res) => {
  const { name, email, password, role } = req.body;
  const employee_id = req.params.id;
  const response = await service.update(
    { name, email, password, role },
    employee_id
  );
  res
    .status(response.status)
    .send({ message: response.message, result: response.result });
};

exports.sign_in = async (req, res) => {
  const response = await service.sign_in(req.body);
  res
    .status(response.status)
    .send({ message: response.message, token: response.result });
};

exports.delete = async (req, res) => {
  await db.employee.destroy({ where: { id: req.params.id } });
  res.send({ message: "employee deleted successfully" });
};

exports.forgetpassword = async (req, res, next) => {
  const email = req.body;
  const response = await service.forgetpassword(email);
  res
    .status(response.status)
    .send({ message: response.message, result: response.result });
};

exports.setpassword = async (req, res) => {
  const otp = req.otp;
  const response = await service.setpassword(req.body, otp);
  res
    .status(response.status)
    .send({ message: response.message, result: response.result });
};
