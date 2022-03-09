const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

const decodeToken = require("../middleware/auth")
const paramsCheck = require("../middleware/paramscheck")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.userLogin)

//The userId is sent by front end
router.get("/users/:userId", decodeToken.decodeToken, paramsCheck.paramsCheck,   userController.getUserData)

router.put("/users/:userId", decodeToken.decodeToken, paramsCheck.paramsCheck, userController.updatedUser)

router.delete("/users/:userId", decodeToken.decodeToken, paramsCheck.paramsCheck,  userController.deleteUser)

module.exports = router;