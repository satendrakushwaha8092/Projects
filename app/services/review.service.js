const db=require('../../models/index')
exports.create =async (data)=>{
    const savedData=await db.reviews.create(data)
    return{
        status: 400,
        message: "successful",
        result: savedData
    }
}