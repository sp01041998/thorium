const userModel = require("../models/userModel")

const paramsCheck = async function (req, res, next) {
    let userId = req.params.userId
    let userDetails = await userModel.findById(userId)

    if (!userDetails) return res.send({ status: false, msg: "Plese provide valid userId" })
    next()

}

module.exports.paramsCheck=paramsCheck