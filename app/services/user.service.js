const db = require("../../models/index");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken")

exports.create = async (data) => {
  const isEmailExist = await db.users.findOne({ where: { email: data.email } });
  if (isEmailExist)
    return {
      status: 400,
      message: "email is used",
      result: null,
    };
    const isPhoneExist = await db.users.findOne({ where: { phone: data.phone } });
  if (isPhoneExist)
    return {
      status: 400,
      message: "phone  number is used",
      result: null,
    };
  const savedData = await db.users.create(data);
  return {
    status: 201,
    message: "successfully created",
    result: savedData,
  };
};

exports.login = async (data) => {
    if(!data.email) return {
        status: 400,
        message: "email is required",
        result: null
    }

    if(!data.password) return {
        status: 400,
        message: "password is required",
        result: null
    }

    const isUserExist=await db.users.findOne({where:{[Op.and]: [{email:data.email }, { password:data.password }]}})
    if(!isUserExist) return {
        status: 400,
        message: "please enter correct userId and password",
        result: null
    }

        const token = jwt.sign(isUserExist.id,"books")
        return {
            status: 200,
            message: "login successfully",
            result: token
        }
}
