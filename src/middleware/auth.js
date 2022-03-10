const jwt = require("jsonwebtoken")

let authenticate = async function (req, res, next) {
    try {
        let token = req.headers['user-auth-token']

        if (!token) return res.status(400).send({ status: false, msg: "token is not present in header" })

        // console.log(token)

        let decodeToken = jwt.verify(token, "Ronaldo-007")
        if (decodeToken) {
            req.decodeToken = decodeToken
            next()

        } else {

            return res.status(401).send({ status: false, msg: "Invalid token" }) // if 
        }
    }
    catch (err) {
        res.sttus(500).send({ status: false, msg: err.message })
    }



}

const authorise = function (req, res, next) {
    try {
        let userId = req.params.userId


        if (req.decodeToken.userId != userId) return res.status(403).send({ status: false, msg: "you are trying to change someone else profile" })
        req.userId = userId
        next()

    }catch(err){
        res.sttus(500).send({ status: false, msg: err.message })


    }
    
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise