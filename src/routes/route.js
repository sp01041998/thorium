const express = require('express');
const router = express.Router();

const authorController = require("../Controller/authorController")
const blogController = require("../Controller/blogController")



router.get("/test-me", function(req,res){
    res.send("hello there")
})

router.post("/createAuthor", authorController.createAuthor)

router.post("/blogCreated", blogController.createBlog)

module.exports = router;