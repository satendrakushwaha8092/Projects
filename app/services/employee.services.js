const db = require("../../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require(".././nodemailer/nodemailer");
var otp = null;
var email = null;

exports.create = async (data) => {
  try {
    const isEmail = await db.employee.findOne({ where: { email: data.email } });
    if (isEmail) {
      return {
        status: 500,
        message: "eamil id alredy used",
        result: null,
      };
    }
    if (data.password.length < 8 || data.password.length > 15) {
      return {
        status: 500,
        message: "passowrd min length is 8 and max length is 15",
        result: null,
      };
    }
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const response = await db.employee.create({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    });
    return {
      status: 201,
      message: "employee created successfully",
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

exports.update = async (data, employee_id) => {
  const employee = await db.employee.findOne({ where: { id: employee_id } });
  if (!employee) {
    return {
      status: 404,
      message: "employee is not present",
      result: null,
    };
  }
  const response = await db.employee.update(
    {
      name: data.name,
      email: data.email,
      passworddata: data.password,
      roledata: data.role,
    },
    { where: { id: employee_id } }
  );
  return {
    status: 200,
    message: "employee updated successfully",
    result: response,
  };
};

exports.sign_in = async (data) => {
  email = data.email;
  const employee = await db.employee.findOne({ where: { email: data.email } });
  if (!employee) {
    return {
      status: 404,
      message: "employee is not present",
      result: null,
    };
  }
  const result = await bcrypt.compare(data.password, employee.password);
  console.log("result:", result);
  if (result) {
    token = jwt.sign({ id: employee.id, role: employee.role }, "token");
    return {
      status: 200,
      message: "login success",
      result: token,
    };
  } else {
    return {
      status: 404,
      message: "enter correct employee id password",
      result: "localhost:3000/forgetpassword",
    };
  }
};

exports.forgetpassword = async (data) => {
  const checkEmail = await db.employee.findOne({
    where: { email: email },
  });
  if (!checkEmail)
    return {
      status: 404,
      message: "email is not present",
      result: null,
    };
  otp = parseInt(Math.random() * 10000);
  email = await nodemailer.nodemailer(otp, email);
  return {
    status: 404,
    message: "successfully otp send in your emailid ",
    result: null,
  };
};

exports.setpassword = async (data) => {
  console.log(email, otp);
  if (data.otp == null)
    return {
      status: 400,
      message: "enter otp",
      result: null,
    };
  if (otp === data.otp) {
    if (data.password.length < 8 || data.password.length > 15) {
      return {
        status: 500,
        message: "passowrd min length is 8 and max length is 15",
        result: null,
      };
    }
    const salt = await bcrypt.genSalt(10);
    const newpassword = await bcrypt.hash(data.password, salt);

    const response = await db.employee.update(
      { password: newpassword },
      {
        where: { email: email },
      }
    );
    return {
      status: 200,
      message: "success fully password updated",
      result: null,
    };
  } else {
    return {
      status: 404,
      message: "enter correct otp",
      result: null,
    };
  }
};
