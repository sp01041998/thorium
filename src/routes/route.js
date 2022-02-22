const express = require('express');
const res = require('express/lib/response');
const router = express.Router();


// This Api will give all the movies in the array

router.get('/movies', function (req, res) {
    res.send('["3Idiot", "Lagaan","Swadesh","Hera Feri","DDLJ"]')

});

// this api will give movie name against index number
router.get('/movies/:index', function (req, res) {
    const movieList = ["3Idiot", "Lagaan", "Swadesh", "Hera Feri", "DDLJ"]
    let movieName = req.params.index 
    if (movieName >= movieList.length) {
        res.send('Plesae provide a valid index to see your desired movie name')
    }else {
        res.send(movieList[movieName])
    }

});

module.exports = router;