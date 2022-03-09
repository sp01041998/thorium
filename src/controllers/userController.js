const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {

  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData })
};

const userLogin = async function (req, res) {
  let userName = req.body.emailId
  let password = req.body.password

  const credentialCheck = await userModel.findOne({ emailId: userName, password: password })

  if (!credentialCheck) return res.send({ status: false, msg: "username or password is incorrect" })


  let token = jwt.sign(
    { userId: credentialCheck._id.toString() },
    "Ronaldo-007"
  )

  res.setHeader("user-auth-token", token)
  res.send({ status: true, data: token })

};




const getUserData = async function (req, res) {
  

  //if (userDetails._id != decodeToken.userId) return res.send({ status: false, msg: "you are trying to access someone else profile" })

  let userId = req.params.userId
  let userDetails = await userModel.findById(userId)
  return res.send({ status: true, msg: userDetails })

}



const updatedUser = async function (req, res) {

  let userId = req.params.userId
  
  //if(decodeToken.userId != userId) return res.send({status : false, msg :"you are trying to change someone else profile"})
  let userData = req.body
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
     userData
  );


  res.send({ status:true, data: updatedUser });


}



const deleteUser = async function(req, res){
  
  
  let userId = req.params.userId
  
  //if(decodeToken.userId != userId) return res.send({status : false, msg: "you are trying to delete someone else profile"})

  let data = await userModel.findOneAndUpdate(
    {_id : userId},
    { $set : {isDeleted : true}}
  )
  return res.send({status : true , msg : data})
}



module.exports.createUser = createUser;
module.exports.userLogin = userLogin
module.exports.getUserData = getUserData
module.exports.updatedUser=updatedUser
module.exports.deleteUser=deleteUser
