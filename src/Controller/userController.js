const userModel = require("../Models/userModels")

const createUser = async function(req, res){
   let userData = req.body
   let userCreated = await userModel.create(userData)
   res.send({msg : userCreated})

}

module.exports.createUser=createUser
