const express = require('express');
const router = express.Router();

const authorController = require("../Controller/authorController")



router.get("/test-me", function(req,res){
    res.send("hello there")
})

router.post("/createAuthor", authorController.createAuthor)

module.exports = router;