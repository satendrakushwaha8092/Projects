
const service=require('../services/review.service') //
exports.create = async (req,res) => {
    const response =await service.create(req.body)
    res.status(response.status).send({message: response.message,result:response.result})
}