const userService = require('../services/userServices')

exports.createuser = async (req,res) => {
    const data=req.body
    const response=await userService.createuser(data)
    res.status(response.status).send({message:response.message,result:response.result})
}

exports.login = async (req, res) => {
    const data=req.body
    const response=await userService.login(data)
    res.status(response.status).send({message:response.message,result:response.result})
}

exports.logout = async (req, res) => {
    let token = req.headers.authorization;
    const response=await userService.logout(token)
    res.status(response.status).send({message:response.message,result:response.result})
}


exports.getusers = async (req, res) => {
    const response=await userService.getusers()
    res.status(response.status).send({message:response.message,result:response.result})
}

exports.updateuser = async (req, res) => {
    const data=req.body
    const response=await userService.updateUser(data,req.userData.userId);
    res.status(response.status).send({message:response.message,result:response.result})
}

exports.deleteuser = async (req, res) => {
    const response=await userService.deleteUser(req.userData.userId)
    res.status(response.status).send({message:response.message,result:response.result})
}

exports.forgetPassword=async (req, res) => {
    const response=await userService.forgetPassword(req.body.email)
    res.status(response.status).send({message:response.message,result:response.result})
}

exports.setPassword=async (req,res)=>{
    const {emailId,otp,password,conformPassword}=req.body
    const response=await userService.setPassword(emailId,otp,password,conformPassword)
    res.status(response.status).send({message:response.message,result:response.result})
}