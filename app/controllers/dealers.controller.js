const db = require("../../models/index");
const service = require("../services/dealers.service");

exports.create = async (req, res) => {
  const { first_name, last_name, age, gender, email, password } = req.body;
  const response = await service.create(req.body);
  res
    .status(response.status)
    .send({ message: response.message, result: response.result });
};

exports.get = async (req, res) => {
  const response = await db.dealers.findAll({
    include: [
      {
        model: db.products,
      },
    ],
  });
  res.status(200).send({ message: "successfully", data: response });
};

exports.login = async function (req, res) {
  const response = await service.login(req.body);
  res
    .status(response.status)
    .send({ message: response.message, result: response.result });
};

exports.update = async (req, res) => {
  const data = req.body;
  const productId = req.params.productId;
  const response = await db.dealers.update(data, {
    where: { product_id: productId },
  });
  re.status(200).send({ message: "dealer updated successfully" });
};

exports.delete = async (req, res) => {
  const response = await db.dealers.destroy({ where: { id: req.params.id } });
  res.status(200).send({ message: "successfully deleted", data: response });
};
