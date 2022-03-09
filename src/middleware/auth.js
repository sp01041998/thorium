const jwt = require("jsonwebtoken")
let decodeToken = async function(req,res,next){
let token = req.headers['user-auth-token']

if (!token) return res.send({ status: false, msg: "token is not present in header" })

console.log(token)

let decodeToken = jwt.verify(token, "Ronaldo-007")
console.log(decodeToken)


if (!decodeToken) return res.send({ status: false, msg: "Invalid token" })

next()


}

module.exports.decodeToken=decodeToken