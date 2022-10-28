const db= require('../../models/index')

exports.create= async (data) => {
    const savedData= await db.books.create(data)
    if(savedData) return{
        status: 201,
        message: "successfully created",
        result: savedData
    }
}