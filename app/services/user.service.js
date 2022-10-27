const db = require("../../models/index");
const bcrypt = require("bcrypt");

exports.createuser = async (data) => {
  try {
    const isEmailExist = await db.users.findOne({
      where: { email: data.email },
    });
    if (isEmailExist) {
      return {
        status: 500,
        message: "email already exists",
        result: null,
      };
    }
    const isPhoneExist = await db.users.findOne({
      where: { phone: data.phone },
    });
    if (isPhoneExist) {
      return {
        status: 500,
        message: "Phone number already exists",
        result: null,
      };
    }

    if (data.password.length < 8 || data.password.length > 15) {
      return {
        status: 400,
        message: "passowrd min length is 8 and max length is 15",
        result: null,
      };
    }

    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const result = await db.users.create(data);
    if (result) {
      return { status: 200, message: "user created successfully", result };
    } else {
      return {
        status: 500,
        message: "Error occured while creating user",
        result: null,
      };
    }
  } catch (err) {
    return { status: 500, message: err.message };
  }
};

exports.updateuser = async (userId, data) => {
  if (data.email) {
    const isEmailExist = await db.users.findOne({
      where: { email: data.email },
    });
    if (isEmailExist) {
      return {
        status: 500,
        message: "email already exists",
        result: null,
      };
    }
  }

  if (data.phone) {
    const isPhoneExist = await db.user.findOne({
      where: { phone: data.phone },
    });
    if (isPhoneExist) {
      return {
        status: 500,
        message: "Phone number already exists",
        result: null,
      };
    }
  }
  const result = await db.user.update(data, { where: { id: userId } });
  if (result) {
    return { status: 200, message: "user updated successfully", result };
  } else {
    return {
      status: 500,
      message: "Error occured while creating user",
      result: null,
    };
  }
};
