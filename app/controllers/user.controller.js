const db = require("../../models/index");
const userService = require("../services/user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  console.log(req.file.path)//
  const data = req.body;
  data.profileImage=req.file.path
  const response = await userService.createuser(data);
  return res
    .status(response.status)
    .json({ message: response.message, result: response.result });
};

exports.findUsers = async (req, res) => {
  try {
    const getAllUsers = await db.users.findAll();
    res.status(200).send({ status: true, data: getAllUsers });
  } catch (err) {
    res.status(500).send({ status: false, data: err.message });
  }
};

exports.getUserById = (req, res) => {
  const userId = req.params.id;
  db.user
    .findByPk(userId)
    .then((data) => {
      if (data) res.status(200).send({ status: true, data: data });
      else res.status(404).send({ status: false, msg: "User not found" });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.login = async (req, res) => {
  try {
    const getuser = await db.user.findOne({ where: { email: req.body.email } });
    bcrypt.compare(req.body.password, getuser.password, function (err, result) {
      if (!result) {
        res.status(404).send({
          status: false,
          message: "please enter correct email and password",
        });
      } else {
        let token = jwt.sign({ userId: getuser.id }, "async-await");
        res.status(200).send({ status: true, data: token });
      }
    });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

exports.updatedUser = async function (req, res) {
  try {
    const data = req.body;
    const userId = req.params.id;
    const response = await userService.updateuser(userId, data);
    return res
      .status(response.status)
      .json({ message: response.message, result: response.result });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};