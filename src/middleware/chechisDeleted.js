const jwt = require("jsonwebtoken")
const authorModel = require("../Model/authorModel")
const blogModel = require("../Model/blogModel")


const checkIsDeleted = async function (req, res, next) {
    try {
        let del = await blogModel.findById(req.blogId)
        if (del.isDeleted == true) {
            res.status(404).send({ status: false, msg: " the blog you try to access is already removed from server" })
        } else {
            req.blogId = req.blogId
            next()
        }

    } catch (err) {
        return res.status(404).send({ status: false, msg: err.message })
    }
}


module.exports.checkIsDeleted=checkIsDeleted