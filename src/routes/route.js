const express = require('express');
const router = express.Router();

const authorController = require("../Controller/authorController")
const blogController = require("../Controller/blogController")



router.get("/test-me", function(req,res){
    res.send("hello there")
})

router.post("/createAuthor", authorController.createAuthor)

router.post("/blogCreated", blogController.createBlog)

//router.get("/allBlogs", blogController.allBlogs)

router.get("/blogs", blogController.BloglistbyFilter)

router.put("/blogs/:blogId", blogController.updateBlog)

router.delete("/delete/blogs/:blogId", blogController.deleteBlog)

router.delete("/delete/blogs" ,  blogController.deletecertainBlog)

module.exports = router;