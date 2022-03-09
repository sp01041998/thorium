const jwt = require("jsonwebtoken")

let authenticate = async function (req, res, next) {
    let token = req.headers['user-auth-token']

    if (!token) return res.send({ status: false, msg: "token is not present in header" })

    console.log(token)

    let decodeToken = jwt.verify(token, "Ronaldo-007")
    if (decodeToken) {
        req.decodeToken = decodeToken
        next()

    } else {

        return res.send({ status: false, msg: "Invalid token" })


    }
}

const authorise = function (req, res, next) {
    let userId = req.params.userId

    if (req.decodeToken.userId != userId) return res.send({ status: false, msg: "you are trying to change someone else profile" })
    req.userId=userId
    next()
}

module.exports.authenticate = authenticate
module.exports.authorise=authorise