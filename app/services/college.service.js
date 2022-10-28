const db = require("../../models/index");

exports.createCollege = async (data) => {

  const isEmailExist = await db.College.findOne({  //check dupliate email id
    where: { email: data.email },
  });
  if(isEmailExist) {
    return {
        status: 500,
        message: "email already exists",
        result: null,
      };
  }

  const isPhoneExist = await db.College.findOne({  //check duplicate phone number
    where: { phone: data.phone },
  });
  if(isPhoneExist) {
    return {
        status: 500,
        message: "Phone number already exists",
        result: null,
      };
  }

  const result = await db.College.create({  //created college data
    name: data.name,
    fullName: data.fullName,
    phone: data.phone,
    email: data.email,
  });
  if (result) {
    return { status: 201, message: "College created successfully", result };
  } else {
    return {
      status: 500,
      message: "Error occured while creating College",
      result: null,
    };
  }
};
