const express = require('express');
const router = express.Router();

const bookModel = require("../bookModel/model")

const userController = require ('../userController/controller')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createBook', userController.createBook)

router.get('/bookList', userController.bookList)

router.post('/getBooksInYear',  userController.bookByYear)

router.post('/getParticularBook', userController.getParticularBook)

router.get('/getXINRBooks', userController.getByPrice)

router.get('/getRandomBooks' , userController.getRandomBooks)




module.exports = router;