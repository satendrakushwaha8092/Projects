const db = require("../../models/index");

exports.create = async (data, dealer) => {
  const category = await db.category.findOne({
    where: { id: data.category_id },
  });
  if (!category)
    return {
      status: 400,
      message: "category not present",
      result: category,
    };
  data.dealer_id = dealer;
  const response = await db.products.create(data);
  return {
    status: 202,
    message: "product created successfully",
    result: response,
  };
};

exports.getProduct = async (pg) => {
  const response = await db.products.findAll({
    offset: 3 * (pg - 1),
    limit: 3,
    attributes: {
      exclude: ["id", "createdAt", "updatedAt", "deletedAt"],
    },
    include: [
      {
        model: db.dealers,
        attributes: ["first_name", "last_name", "age", "gender", "email"],
      },
    ],
  });
  return {
    status: 200,
    message: "successfull",
    result: response,
  };
};

exports.getProductByQuery = async (filter) => {
  if (filter.ProductId) {
    const response = await db.products.findAll({
      where: { id: filter.ProductId },
      include: [
        {
          model: db.category,
          //attributes: ["product_name", "description", "quantity", "price"],
        },
      ],
    });
    return {
      status: 200,
      message: "successfull",
      result: response,
    };
    //res.status(200).send({ message: response });
  }

  if (filter.ProductName) {
    const response = await db.products.findAll({
      where: { product_name: filter.ProductName },
      include: [
        {
          model: db.category,
          //attributes: ["product_name", "description", "quantity", "price"],
        },
      ],
    });
    return {
      status: 200,
      message: "successfull",
      result: response,
    };
    //res.status(200).send({ message: response });
  }
};
