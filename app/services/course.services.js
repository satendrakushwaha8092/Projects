const db = require("../../models/index");

exports.create = async (data, role) => {
  if (role == "super_admin") {
    const response = await db.course.create();
    return {
      status: 201,
      message: "course created successfully",
      result: response,
    };
  } else {
    return { status: 400, message: "only super admin add course " };
  }
};

exports.update = async (data, course_id, role) => {
  if (role == "super_admin") {
    const response = await db.course.update(data, { where: { id: course_id } });
    return {
      status: 200,
      message: "course updated successfully",
      result: response,
    };
  } else {
    return {
      status: 201,
      message: "only super admin update course ",
      result: null,
    };
  }
};

exports.delete = async (course_id, role) => {
  if (role == "super_admin") {
    const response = await db.course.destroy({ where: { id: course_id } });
    return {
      status: 200,
      message: "course deleted successfully",
      result: null,
    };
  } else {
    return {
      status: 400,
      message: "only super admin update course ",
      result: null,
    };
  }
};
