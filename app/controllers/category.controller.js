const service = require("../services/category.services");
const db = require("../../models/index");
const { Op } = require("sequelize");

exports.create = async (req, res) => {
  const data = req.body;
  const response = await service.create(data);
  res
    .status(response.status)
    .send({ message: response.message, result: response.result });
};

exports.get = async (req, res) => {
  const filter = req.query;
  console.log("filter:", filter);
  const response = await service.get(filter);
  res
    .status(response.status)
    .send({ message: response.message, data: response.result });
};

exports.update = async (req, res) => {
  const data = req.body;
  const productId = req.params.productId;
  const response = await db.products.update(data, {
    where: { product_id: productId },
  });
  res.send(200).send("product updated successfully");
};

exports.delete = async (req, res) => {
  const response = await db.category.destroy({ where: { id: req.params.id } });
  res.status(200).send({ message: "successfully deleted", data: response });
};
