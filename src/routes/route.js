const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const userController = require('../controller/controller')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", userController.createAuthor)

router.post('/createBooks', userController.createBook)

router.get('/bookbychetan', userController.bookByChetan)

router.get('/bookupdate', userController.bookUpdate)

router.get('/bookbyprice', userController.bookByPrice)



module.exports = router;