const db = require("../../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.create = async (data) => {
  try {
    console.log("data:", data.password);
    const duplicateEamil = await db.dealers.findOne({
      where: { email: data.email },
    });
    if (duplicateEamil)
      return {
        status: 400,
        message: "email is already in use",
        result: response,
      };
    if (data.password.length < 8 || data.password.length > 15) {
      return {
        status: 500,
        message: "passowrd min length is 8 and max length is 15",
        result: null,
      };
    }

    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);

    const response = await db.dealers.create(data);
    return {
      status: 201,
      message: "dealer succesfull created",
      result: response,
    };
  } catch (err) {
    return {
      status: 500,
      message: "server error",
      result: err.message,
    };
  }
};

exports.login = async (data) => {
  var token = null;
  let check = null;
  const dealer = await db.dealers.findOne({ where: { email: data.email } });
  const result = await bcrypt.compare(data.password, dealer.password);
  console.log("result:", result);
  if (result) {
    token = jwt.sign(dealer.id, "token");
    return {
      status: 200,
      message: "login success",
      result: token,
    };
  } else {
    return {
      status: 404,
      message: "enter correct dealer id password",
      result: "localhost:3000/forgetpassword",
    };
  }
};
