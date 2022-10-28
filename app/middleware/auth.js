const jwt = require("jsonwebtoken")
const db=require("../../models/index")

exports.authorization=async (req, res,next) => {
    const token = req.headers["x-api-key"]
    if(!token) return res.status(400).send({message:"token is not present"})
    const user=jwt.verify(token,"books")
    const userdata=await db.users.findOne({where: {id: user}})
    if(userdata.id!==req.body.userId) return res.status(400).send("user not allowed to access modify other user data")
    next()
}