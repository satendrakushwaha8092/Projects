const db = require("../models/index");
const service = require("./service");

exports.create = async (req, res) => {
  try {
    const data = req.body;
    const response = await service.create(req, data);
    res
      .status(response.status)
      .send({ message: response.message, result: response.result });
  } catch (err) {
    res.status(404).send({ status: false, message: err.message });
  }
};

