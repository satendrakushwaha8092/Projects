const db = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var moment = require("moment");
const { where } = require("sequelize");
const { sendMail } = require("../utils/nodemailer");

exports.createuser = async (data) => {
  if (!/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(data.phone)) {
    return {
      status: 400,
      message: "valid phone number is required",
    };
  }

  let dupliPhone = await db.users.findOne({ where: { phone: data.phone } });
  if (dupliPhone) {
    return {
      status: 400,
      message: "phone number already exits",
    };
  }

  let validemail = await db.sequelize.query(
    `select * from users where "email"='${data.email}' and "deletedAt"=null`
  );
  console.log(validemail);
  if (validemail[0].length > 0) {
    return { status: 400, message: "email id is already registered" };
  }

  if (data.password.length < 8 || data.password.length > 15) {
    return {
      status: 400,
      message: "passowrd min length is 8 and max length is 15",
    };
  }

  let isValidPass =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(
      data.password
    );
  if (!isValidPass) {
    return { status: 400, message: "please provide strong password" };
  }

  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);
  const response = await db.sequelize
    .query(`INSERT INTO users ("fname","lname","phone","email","password","address","skills","resume","createdAt","updatedAt")
  VALUES  ('${data.fname}', '${data.lname}','${data.phone}','${data.email}','${
    data.password
  }','${data.address}',
  '${data.skills}','${data.resume}','${new Date()
    .toISOString()
    .slice(0, 10)}','${new Date().toISOString()}')`);
  console.log(response);
  //sendMail(response.dataValues.email,"registered successfully on job portel",JSON.stringify(response.dataValues))
  return {
    status: 201,
    message: "user registered successfully",
    result: response,
  };
};

exports.login = async (data) => {
  let user = await db.sequelize.query(
    `select * from users where "email"='${data.email}' and "deletedAt" is null`
  );
  console.log(user[0]);
  if (user[0].length == 0) {
    return {
      status: 404,
      message: "email or password are not matching",
    };
  }

  let result = await bcrypt.compare(data.password, user[0][0].password);
  if (result) {
    let token = jwt.sign(
      {
        userId: user[0][0].id,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 10 * 60 * 60,
      },
      "task"
    );

    await db.loggers.create({
      userId: user[0][0].id,
      token: token,
      expiryDate: moment().add(10, "minute").format(),
    });

    return {
      status: 200,
      message: "user login successfully",
      result: {
        userId: user.id,
        token: token,
      },
    };
  } else {
    return {
      status: 400,
      message: "plz provide correct password",
    };
  }
};

exports.logout = async (data) => {
  const token = data.split(" ")[1];
  await db.sequelize.query(
    `update loggers set "deletedAt"='${new Date().toISOString()}' where token='${token}'`
  );
  return {
    status: 200,
    message: "logout successfully",
    result: null,
  };
};

exports.getusers = async () => {
  const response = await db.sequelize.query(
    `select * from users where "deletedAt" is null`
  );
  return {
    status: 200,
    message: "successfull",
    result: response[0],
  };
};

exports.updateUser = async (data, userId) => {
  const user = await db.sequelize.query(
    `select * from users where "id"='${userId}' and "deletedAt" is null`
  );
  if (!user[0].length)
    return {
      status: 400,
      message: "user not present",
      result: null,
    };
  if (data.phone) {
    if (!/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(data.phone)) {
      return {
        status: 400,
        message: "valid phone number is required",
      };
    }

    let dupliPhone = await db.users.findOne({ where: { phone: data.phone } });
    if (dupliPhone) {
      return {
        status: 400,
        message: "phone number already exits",
      };
    }
  }
  if (data.email) {
    let validemail = await db.users.findOne({ email: data.email });
    if (validemail) {
      return { status: 400, message: "email id is already registered" };
    }
  }
  if (data.password) {
    if (data.password.length < 8 || data.password.length > 15) {
      return {
        status: 400,
        message: "passowrd min length is 8 and max length is 15",
      };
    }

    let isValidPass =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(
        data.password
      );
    if (!isValidPass) {
      return { status: 400, message: "please provide strong password" };
    }

    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
  }

  for (const [key, value] of Object.entries(data)) {
    await db.sequelize.query(
      `update users set "${key}"='${value}' where "id"='${userId}'`
    );
  }

  return {
    status: 200,
    message: "user updated successfullly",
    result: null,
  };
};

exports.deleteUser = async (userId) => {
  const user = await db.sequelize.query(
    `select * from users where "id"='${userId}' and "deletedAt" is null`
  );
  if (!user[0].length)
    return {
      status: 400,
      message: "user not present",
      result: null,
    };
  console.log("userId:", userId);
  await db.sequelize.query(
    `update users set "deletedAt"='${new Date().toISOString()}' where "id"='${userId}'`
  );
  const token = data.split(" ")[1];
  console.log(token);
  await db.sequelize.query(
    `update loggers set "deletedAt"='${new Date().toISOString()}' where token='${token}'`
  );
  return {
    status: 200,
    message: "user deleted successfully",
    result: null,
  };
};

exports.forgetPassword = async (emailId) => {
  let user = await db.sequelize.query(
    `select * from users where "email"='${emailId}' and "deletedAt" is null`
  );
  if (user[0].length == 0)
    return {
      status: 400,
      message: "user not present",
      result: null,
    };
  await db.sequelize.query(
    `update "resetPasswordOtps" set "deletedAt"='${new Date().toISOString()}' where "emailId"='${emailId}'`
  );
  const otp = Math.round(Math.random() * 10000);
  sendMail(emailId, "OTP", otp);
  const response = await db.sequelize.query(`
  INSERT INTO "resetPasswordOtps" 
  ("emailId","otp","expiryTime","createdAt","updatedAt") VALUES
  ('${emailId}',${otp},'${new Date().toISOString()}','${new Date().toISOString()}','${new Date().toISOString()}')
  `);
  return {
    status: 200,
    message: "otp send successfully",
    result: null,
  };
};

exports.setPassword = async (emailId, otp, password, conformPassword) => {
  const otpData = await db.sequelize.query(
    `select * from "resetPasswordOtps" where "otp"='${otp}' and "deletedAt" is null`
  );
  console.log(otpData);
  if (otpData[0].length == 0)
    return {
      status: 200,
      message: "enter valid otp",
    };
  if (password !== conformPassword)
    return {
      status: 200,
      message: "password not match",
    };
  await db.sequelize.query(
    `update "resetPasswordOtps" set "deletedAt"='${new Date().toISOString()}' where "otp"='${otp}'`
  );
  const salt = await bcrypt.genSalt(10);
  conformPassword = await bcrypt.hash(password, salt);
  const response = await db.sequelize.query(
    `update "users" set "password"='${conformPassword}' where "email"='${emailId}'`
  );
  return {
    status: 200,
    message: "password updated successfullly",
    result: response,
  };
};
