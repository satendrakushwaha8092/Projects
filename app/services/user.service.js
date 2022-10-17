const db = require("../../models/index");

exports.createuser = async (data) => {
  const isEmailExist = await db.user.findOne({
    where: { email: data.email },
  });
  if (isEmailExist) {
    return {
      status: 500,
      message: "email already exists",
      result: null,
    };
  }
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
  const result = await db.user.create(data);
  if (result) {
    return { status: 200, message: "user created successfully", result };
  } else {
    return {
      status: 500,
      message: "Error occured while creating College",
      result: null,
    };
  }

  //   db.user
  //     .create(data)
  //     .then((data) => res.status(200).send({ status: true, data: data }))
  //     .catch((err) => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while retrieving tutorials.",
  //       });
  //     });
};
