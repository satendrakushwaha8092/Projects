const db = require("../../models/index");

exports.createUser = (req, res) => {
  const data = req.body;
  db.user
    .create(data)
    .then((data) => res.status(200).send({ status: true, data: data }))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.findUsers = (req, res) => {
  const userId = req.params.id;
  db.user
    .findAll()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
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
