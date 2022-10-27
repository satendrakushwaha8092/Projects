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

exports.get = async (req, res) => {
  const data = await db.urls.findAll();
  res.status(200).send({ status: false, message: data });
};

exports.getUrl = async (req, res) => {
  try {
    const url = await db.urls.findOne({
      where: { urlCode: req.params.urlCode },
    });
    if(!url) return res.status(404).send({ status: false, message:"not found" });
    res.status(301).redirect(url.longUrl);
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};
