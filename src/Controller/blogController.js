const blogModel = require("../Model/blogModel")

const createBlog = async function (req, res) {
    
        let data = req.body
        let blogCreated = await blogModel.create(data)
        res.send({status : true , msg : blogCreated})


}

module.exports.createBlog=createBlog