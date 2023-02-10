const db= require('../models/index')

exports.create=async (req,res) => {
  try{
    const data=req.body
  const response=await db.User_Profile.create(data)
  res.send(response)
  }catch(err){
    res.send(err.message)
  }
}

exports.get=async (req, res) => {
    const data=await db.User_Profile.findAll({
        attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt","user_id","profile_id","id"],
          },
        include: [
            {
              model:db.profilesData
            },
            {
              model: db.usersData
            }  
          ],
    })
    res.send(data)
}