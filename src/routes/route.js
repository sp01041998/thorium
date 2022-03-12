const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")

const tempController = require("../controllers/temperatureController")

const meme= require("../controllers/memeController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/getByDistrict" , CowinController.getByDistrict)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/temp/getByCity" , tempController.getTemp)

router.get("/temp/getSortedCity"  , tempController.getSortedCity)

router.post("/meme", meme.memeCreation)



module.exports = router;