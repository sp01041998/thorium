const express = require('express');
const obj = require("../logger/loggers.js");
const router = express.Router();



router.get('/test-me', function (req, res) {
    res.send(obj.welcome("sp"))
});

module.exports = router;