const db = require("../../models/index");

exports.create = async (data) => {
  console.log(data);
  const response = await db.category.create(data);
  return {
    status: 202,
    message: "category created successfully",
    result: response,
  };
};

exports.get = async (filter) => {
  if (filter.CategoryName) {
    const response = await db.category.findAll({
      where: { category: filter.CategoryName },
      attributes: {
        exclude: ["id", "createdAt", "updatedAt", "deletedAt"],
      },

      include: [
        {
          model: db.products,
          attributes: ["product_name", "description", "quantity", "price"],
        },
      ],
    });
    return {
      status: 200,
      message: "successfully",
      result: response,
    };
  }

  if (filter.CategoryId) {
    const response = await db.category.findAll({
      where: { id: filter.CategoryId },
      attributes: {
        exclude: ["id", "createdAt", "updatedAt", "deletedAt"],
      },

      include: [
        {
          model: db.products,
          attributes: ["product_name", "description", "quantity", "price"],
        },
      ],
    });
    return {
      status: 200,
      message: "successfully",
      result: response,
    };
  }
};
