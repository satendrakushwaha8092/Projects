const jwt = require("jsonwebtoken");
const db = require("../models/index");

exports.auth = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token)
    res.status(404).send({ status: false, message: "token is not present" });
  token = token.split(" ")[1];
  const loggerData = await db.loggers.findOne({ where: { token: token } });
  if (!loggerData)
    res.status(404).send({ status: false, message: "please login" });

  const userId = jwt.verify(loggerData.token, "task");
  const user = await db.users.findOne({ where: { id: loggerData.userId } });
  if (!user)
    return res.status(404).send({ status: false, message: "user not exist" });
  if (user.dataValues.role == "admin") {
    const userData = jwt.decode(token);
    if(req.query.id)
    req.userData ={userId:req.query.id}
    else
    req.userData=userData
    next();
  } else {
    const userData = jwt.decode(token);
    req.userData = userData;
    next();
  }
};
