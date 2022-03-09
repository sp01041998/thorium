const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

const middleware = require("../middleware/auth")
// const paramsCheck = require("../middleware/paramscheck")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.userLogin)

//The userId is sent by front end
router.get("/users/:userId", middleware.authenticate, middleware.authorise,   userController.getUserData)

router.put("/users/:userId", middleware.authenticate, middleware.authorise, userController.updatedUser)

router.delete("/users/:userId", middleware.authenticate, middleware.authorise,  userController.deleteUser)

module.exports = router;