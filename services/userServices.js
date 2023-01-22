const db = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var moment = require('moment');
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

  let validemail = await db.users.findOne({where:{ email: data.email }});
  if (validemail) {
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
  const response = await db.users.create(data);
  //sendMail(response.dataValues.email,"registered successfully on job portel",JSON.stringify(response.dataValues))
  return {
    status: 201,
    message: "user registered successfully",
    result: response,
  };
};

exports.login = async (data) => {
  let user = await db.users.findOne({where:{ email: data.email }});
  if (!user) {
    return res.status(400).send({
      status: false,
      msg: "email or password are not matching",
    });
  }

  let result = bcrypt.compare(data.password, user.password);
  if (result) {
    let token = jwt.sign(
      {
        userId: user.id,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 10 * 60 * 60,
      },
      "task"
    );

    await db.loggers.create({userId:user.id,token:token,expiryDate:Math.floor(Date.now() / 1000) + 10 * 60 * 60})

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

exports.logout=async (data) => {
  const token = data.split(" ")[1];
  console.log(token)
  await db.loggers.destroy({where:{token:token}})
  return {
    status: 200,
    message: "logout successfully",
    result: null,
  }
}

exports.getusers = async () => {
  const response = await db.users.findAll();
  return {
    status: 200,
    message: "successfull",
    result: response,
  };
};

exports.updateUser = async (data, userId) => {
  const user = await db.users.findOne({ where: { id: userId } });
  if (!user)
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
  const response = await db.users.update(data, { where: { id: userId } });
  return {
    status: 200,
    message: "user updated successfullly",
    result: response,
  };
};

exports.deleteUser = async (userId) => {
  const user = await db.users.findOne({ where: { id: userId } });
  if (!user)
    return {
      status: 400,
      message: "user not present",
      result: null,
    };
    console.log("userId:",userId);
  const response = await db.users.destroy({ where: { id: userId } });
  return {
    status: 200,
    message: "user deleted successfully",
    result: null,
  };
};

exports.forgetPassword=async (emailId)=>{
  const user = await db.users.findOne({ where: { email: emailId } });
  if (!user)
    return {
      status: 400,
      message: "user not present",
      result: null,
    };
    await db.resetPasswordOtp.destroy({where:{emailId:emailId}});
    const otp=Math.round(Math.random()*10000)
    sendMail(emailId,"OTP",otp)
  const response = await db.resetPasswordOtp.create({emailId: emailId,otp:otp,expiryTime:moment().add(10, 'minute').format()});
  return {
    status: 200,
    message: "otp send successfully",
    result: null,
  };
}

exports.setPassword=async (emailId,otp,password,conformPassword) => {
  const otpData=await db.resetPasswordOtp.findOne({where: {otp:otp}})
  if(!otpData) return {
    status: 200,
    message: "enter valid otp",
  }  
  if(password!==conformPassword) return {
    status: 200,
    message: "password not match",
  }  
  const salt = await bcrypt.genSalt(10);
  conformPassword = await bcrypt.hash(data.password, salt);
    const response = await db.users.update({password:conformPassword}, { where: { email: emailId } });
  return {
    status: 200,
    message: "password updated successfullly",
    result: response,
  }
}
