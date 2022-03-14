const blogModel = require("../Model/blogModel")
const authorModel = require("../Model/authorModel")
const { response } = require("express")

const createBlog = async function (req, res) {
    try {

        let data = req.body
        if (Object.keys(data).length != 0) {
            let authorId = data.authorId
            let check = await authorModel.findById(authorId)
            //console.log(check)
            if (check) {
                let blogCreated = await blogModel.create(data)
                res.status(201).send({ status: true, msg: blogCreated })
            } else {
                return res.status(400).send({ status: false, msg: "please provide valid author Id" })
            }
        } else {
            res.status(400).send({ status: false, msg: "pls provide data in the body " })
        }
    } catch (err) {
        res.status(400).send({ status: false, msg: err.message })
    }
}



// const allBlogs = async function (req, res) {
//     try {
//         let blogData = await blogModel.find({ isDeleted: false, isPublished: true })

//         if (blogData.length > 0) {
//             res.status(200).send({ status: true, msg: blogData })

//         } else {
//             res.status(404).send({ status: false, msg: "No data found" })
//         }


//     } catch (err) {
//         res.status(400).send({ status: true, msg: err.message })
//     }


// }


const BloglistbyFilter = async function (req, res) {
    try {

        //console.log(req.query)

        let { category, authorId, tags, subCategory } = req.query
        let obj = {}
        if (category != null) obj.category = category
        if (authorId != null) obj.authorId = authorId
        if (tags != null) obj.tags = tags
        if (subCategory != null) obj.subCategory = subCategory
        obj.isDeleted = false
        obj.isPublished = true

        let blogData = await blogModel.find(obj)
        if (blogData.length > 0) {
            res.status(200).send({ status: true, msg: blogData })

        } else {
            res.status(404).send({ status: false, msg: "No data found" })
        }


    } catch (err) {
        res.status(400).send({ status: true, msg: err.message })
    }
}

const updateBlog = async function (req, res) {
    try {
        let data = req.body
        if (Object.keys(data).length != 0) {
            data.isPublished = true
            data.publishedAt = new Date()


            let id = req.params.blogId
            let check = await blogModel.findById(id)
            //console.log(check)
            if (check) {
                if (check.isDeleted == false) {
                    let results = await blogModel.findOneAndUpdate(
                        { _id: id },
                        data,
                        // { returnOriginal: false } or {new:true}

                    )
                    return res.status(200).send({ status: true, msg: results })



                } else {
                    res.status(404).send({ status: false, msg: "The post is already removed from the server" })
                }

            } else {
                res.status(404).send({ status: false, msg: "Please provide valid blog Id" })
            }

        }else{
            res.status(404).send({status :false, msg:err.message })
        }


    } catch (err) {

        res.status(400).send({ status: false, msg: err.message })
    }

}


const deleteBlog = async function (req, res) {
    try {
        let blogId = req.params.blogId
        let id = req.params.blogId
        let check = await blogModel.findById(id)
        console.log(check)
        if (check) {
            if (check.isDeleted == false) {
                let results = await blogModel.updateOne(
                    { _id: id },
                    { $set: { isDeleted: true } }
                )
                return res.status(200).send({ status: true })

            } else {
                res.status(404).send({ status: false, msg: "The post is already removed from the server" })
            }

        } else {
            res.status(404).send({ status: false, msg: "Please provide valid blog Id" })
        }



    } catch (err) {

        res.status(400).send({ status: false, msg: err.message })
    }
}

const deletecertainBlog = async function (req, res) {
    try {
        let { category, authorId, tags, subCategory, isPublished } = req.query
        let obj = {}
        if (category != null) obj.category = category
        if (authorId != null) obj.authorId = authorId
        if (tags != null) obj.tags = tags
        if (subCategory != null) obj.subCategory = subCategory
        obj.isPublished = false
        //if(isPublished != null) obj.isPublished=isPublished

        // if (isPublished == true) {
        //     res.status(404).send({ status: false, msg: "Cannot delete--- already published" })
        // } 

        let result = await blogModel.findOneAndUpdate(
            obj,
            { $set: { isDeleted: true } }
        )
        if (result) {
            res.status(200).send({ status: true, msg: "done" })

        } else {
            res.status(404).send({ status: false, msg: "following match does not exist" })
        }





    } catch (err) {
        res.status(404).send({ status: false, msg: err.message })
    }


}





module.exports.createBlog = createBlog
//module.exports.allBlogs = allBlogs
module.exports.BloglistbyFilter = BloglistbyFilter
module.exports.updateBlog = updateBlog
module.exports.deleteBlog = deleteBlog
module.exports.deletecertainBlog = deletecertainBlog