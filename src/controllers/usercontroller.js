const UserModel = require("../models/userModel")

const createUser = async function (req, res) {
    try {
        let data = req.body
        let savedData = await UserModel.create(data)
        res.send({ msg: savedData })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

const getUsersData = async function (req, res) {
    let allUsers = await UserModel.find({ _id: "627cb17559f49af8ae72ac0f" })
    res.send({ msg: allUsers })
}

const updatedata = async function (req, res) {
    let data = req.body
    let allUsers = await UserModel.findOneAndUpdate({ _id: "627cb17559f49af8ae72ac0f" }, data, { new: true })
    res.send({ msg: allUsers })
}

const deletedata = async function (req, res) {//
    try {
        let data = req.body
        let allUsers = await UserModel.findOneAndDelete({ _id: "627cb03d3014456f1818e280" }, { new: true })
        res.send({ msg: allUsers })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}
//627cb17559f49af8ae72ac0f
module.exports.updatedata = updatedata
module.exports.createUser = createUser
module.exports.getUsersData = getUsersData
module.exports.deletedata = deletedata