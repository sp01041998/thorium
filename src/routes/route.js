const express = require('express');
const router = express.Router();
const userControllers = require("../controllers/userControllers")
const userModel = require("../models/userModels")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/new-booksCollection', userControllers.createbookCollection)

router.get('/allBooks', userControllers.getallBooksCollection)

module.exports = router;