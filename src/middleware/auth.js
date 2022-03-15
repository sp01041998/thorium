const jwt = require("jsonwebtoken")
const authorModel = require("../Model/authorModel")
const blogModel = require("../Model/blogModel")

let authenticate = async function (req, res, next) {
    try {
        let token = req.headers['user-auth-token']

        if (!token) return res.status(400).send({ status: false, msg: "token is not present in header" })

        // console.log(token)

        let decodeToken = jwt.verify(token, "Ronaldo-007")
        if (decodeToken) {
            req.decodeToken = decodeToken
            console.log(req.decodeToken)
            next()

        } else {

            return res.status(401).send({ status: false, msg: "Invalid token" }) // if 
        }
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }



}

const authorise = async function (req, res, next) {
    try {
        let blogId = req.params.blogId

        let check = await blogModel.findById(blogId) // we can add isdeleted check here
        if (check) {
            //console.log(check)


            if (req.decodeToken.userId != check.authorId) return res.status(403).send({ status: false, msg: "you are trying to change someone else profile" })
            req.blogId = blogId
            next()

        } else {
            return res.status(404).send({ status: false, msg: "blog you want to access does not exist in the system" })
        }


    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })


    }

}

// const checkIsDeleted = async function (req, res, next) {
//     try {
//         let del = await blogModel.findById(req.blogId)
//         if (del.isDeleted == true) {
//             res.status(404).send({ status: false, msg: " the blog you try to access is already removed from server" })
//         } else {
//             req.blogId = req.blogId
//             next()
//         }

//     } catch (err) {
//         return res.status(404).send({ status: false, msg: err.message })
//     }

// }

module.exports.authenticate = authenticate
module.exports.authorise = authorise
//module.exports.checkIsDeleted=checkIsDeleted