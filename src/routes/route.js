const express = require('express');
const router = express.Router();
const productController = require("../Controller/productController")
const userController= require("../Controller/userController")
const orderControllers = require("../Controller/orderController")
const middleware = require("../middleware/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/product", productController.createProduct)

router.post("/user", middleware.headerCheck, userController.createUser)

router.post("/orders", middleware.headerCheck, orderControllers.createOrder)



//MOMENT JS

module.exports = router;