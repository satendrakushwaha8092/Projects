const jwt = require("jsonwebtoken");
const db = require("../../models/index");

exports.auth = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token)
    res.status(404).send({ status: false, message: "token is not present" });
  token = token.split(" ")[1];
  console.log("token:", token);
  if (token === "token")
    res.status(404).send({ status: false, message: "please login" });

  const employeeId = jwt.verify(token, "token");
  const employee = await db.employee.findOne({ where: { id: employeeId.id } });
  if (!employee)
    return res.status(404).send({ status: false, message: "user not exist" });

  if (employee.role == "employee" || employee.role == "admin") {
    if (req.params.id) {
      if (employee.id != req.params.id)
        return res.status(404).send({
          status: false,
          message: "user not allowed to access other user data",
        });
    }
  }
  const employeeData = jwt.decode(token);
  req.employee = employeeData;
  next();
};
