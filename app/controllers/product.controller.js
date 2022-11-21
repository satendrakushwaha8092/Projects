const service = require("../services/product.service");
const db = require("../../models/index");

exports.create = async (req, res) => {
  const data = req.body;
  const response = await service.create(data, req.dealer);
  res
    .status(response.status)
    .send({ message: response.message, result: response.result });
};

exports.get = async (req, res) => {
  const pg = req.params.id;
  const response = await service.getProduct(pg);
  res
    .status(response.status)
    .send({ message: response.message, data: response.result });
};

exports.getProductByQuery = async (req, res) => {
  const filter = req.query;
  const response = await service.getProductByQuery(filter);
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
};

exports.delete = async (req, res) => {
  const response = await db.products.destroy({ where: { id: req.params.id } });
  res.status(200).send({ message: "successfully deleted", data: response });
};
