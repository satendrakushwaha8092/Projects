const db = require("../../models/index");

exports.createIntern = async (data) => {
  const isEmailExist = await db.Intern.findOne({  //check dupliate email
    where: { email: data.email },
  });
  if(isEmailExist) {
    return {
        status: 500,
        message: "email already exists",
        result: null,
      };
  }
  const isPhoneExist = await db.Intern.findOne({ //check dupliate phone number
    where: { phone: data.phone },
  });
  if(isPhoneExist) {
    return {
        status: 500,
        message: "Phone number already exists",
        result: null,
      };
  }

  const isCollegeIdExist = await db.College.findOne({
    where: { id: data.collegeId }
  });
  console.log(isCollegeIdExist)
  if(!isCollegeIdExist) {
    return {
        status: 500,
        message: "enter valid college id",
        result: null,
      };
  }

  const result = await db.Intern.create({  //data created
    name: data.name,
    email: data.email,
    phone: data.phone,
    collegeId: data.collegeId,
  });
  if (result) {
    return { status: 201, message: "intern created successfully", result };
  } else {
    return {
      status: 500,
      message: "Error occured while creating intern",
      result: null,
    };
  }
};
