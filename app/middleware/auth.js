const jwt = require("jsonwebtoken");
const db = require("../../models/index");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["x-api-key"];
    if (token) {
      const result = jwt.verify(token, "async-await");
      const findUser = await db.user.findOne({ where: { id: result.userId } });
      if (!findUser)
        res.status(400).send({ status: false, message: "token is not valid" });
      console.log(result.userId === Number(req.params.id));
      if (result.userId != Number(req.params.id))
        return res.status(400).send({
          status: false,
          message: "not allowed to change other information",
        });
      next();
    } else {
      res.status(404).send({ status: false, message: "token is not present" });
    }
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};
