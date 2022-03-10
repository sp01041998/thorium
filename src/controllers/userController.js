const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {

  try {
    let data = req.body
    console.log(data)
    if (Object.keys(data).length != 0) {
      let savedData = await BookModel.create(data)
      res.status(201).send({ msg: savedData })
    }
    else res.status(400).send({ msg: "BAD REQUEST" })
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}





const userLogin = async function (req, res) {
  try {
    let data = req.body


    if (Object.keys(data).length != 0) {
      let userName = req.body.emailId
      let password = req.body.password
      const credentialCheck = await userModel.findOne({ emailId: userName, password: password })
      if (!credentialCheck) return res.status(404).send({ status: false, msg: "username or password is incorrect" })
      let token = jwt.sign(
        { userId: credentialCheck._id.toString() },
        "Ronaldo-007"
      )

      res.setHeader("user-auth-token", token)
      res.status(201).send({ status: true, data: token })
    }
    else res.status(400).send({ msg: "BAD REQUEST" })

  } catch (err) {
    res.status(500).send({ msg: "error", error: err.message })

  }


};




const getUserData = async function (req, res) {

  //let userId = req.params.userId
  // if (userId != req.decodeToken.userId) return res.send({ status: false, msg: "you are trying to access someone else profile" })

  try {
    let userDetails = await userModel.findById(req.userId)
    return res.status(201).send({ status: true, msg: userDetails })


  } catch (err) {
    res.status(500).send({ msg: "error", error: err.message })



  }

}



const updatedUser = async function (req, res) {

  // let userId = req.params.userId

  // if (req.decodeToken.userId != userId) return res.send({ status: false, msg: "you are trying to change someone else profile" })
  try {
    let data = req.body


    if (Object.keys(data).length != 0) {
      let updatedUser = await userModel.findOneAndUpdate(
        { _id: req.userId },
        userData
      );
      res.status(201).send({ status: true, data: updatedUser })


    } else res.status(400).send({ msg: "BAD REQUEST" })


  }catch(error){
    res.status(500).send({ msg: "error", error: err.message })


  }
}







const deleteUser = async function (req, res) {


  // let userId = req.params.userId

  // if (req.decodeToken.userId != userId) return res.send({ status: false, msg: "you are trying to delete someone else profile" })
  try{
    let data = await userModel.findOneAndUpdate(
      { _id: req.userId },
      { $set: { isDeleted: true } }
    )
    return res.status(201).send({ status: true, msg: data })
  }catch{
    res.status(500).send({ msg: "error", error: err.message })

  
  }
}



module.exports.createUser = createUser;
module.exports.userLogin = userLogin
module.exports.getUserData = getUserData
module.exports.updatedUser = updatedUser
module.exports.deleteUser = deleteUser
