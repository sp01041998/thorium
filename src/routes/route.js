const express = require('express');
const obj = require("../logger/loggers.js");
const router = express.Router();



router.get('/test-me', function (req, res) {
    let names = [ 'Hariom', 'Arpit', 'Akash', 'Sabiha']
    //Module 1 members
    obj.printMessage('thorium')
    console.log(obj.url)
    obj.printWelcomeMessage()
    res.send("hi my name is shreyash")
})

module.exports = router;