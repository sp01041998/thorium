const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
//const bookController= require("../controllers/bookController")

const publisherController = require('../controllers/publisherController')

const bookController = require("../controllers/bookController")

const bookModel=require('../models/bookModel')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", authorController.createAuthor  )

router.post("/createpublisher", publisherController.createPublisher  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.put("/updatebook1", bookController.isHardCover)

router.put('/updatePrice', bookController.changeBookPrice)


//router.get("/deleteauthor", authorController.deleteauthor)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
// router.get("/deleteall", bookController.deleteall)

module.exports = router;