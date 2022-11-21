const jwt = require("jsonwebtoken");
const db = require("../../models/index");

exports.auth = async (req, res, next) => {
  const token = req.headers["x-api-key"];

  if (!token)
    res.status(404).send({ status: false, message: "token is not present" });
  const dealerId = jwt.verify(token, "token");

  const dealer = await db.dealers.findOne({ where: { id: dealerId } });
  if (!dealer)
    return res.status(404).send({ status: false, message: "user not exist" });

  if (req.params.id) {
    if (user.id != req.params.id)
      return res.status(404).send({
        status: false,
        message: "user not allowed to access other user data",
      });
  }
  const dealerData = jwt.decode(token);
  req.dealer = dealerData;
  next();
};
