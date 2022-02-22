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
})

    // movies list in an object
    router.get('/films', function(req,res){
        res.send('[{"id" : 1 , "name": "The Shining"},{"id" : 2 , "name":"Incredibles"},{"id": 3 , "name": "Rang de basanti"}]')
    });

    // get movie object with id value

    router.get('/films/:filmId', function(req, res){
       const movieObjectList = [{"id" : 1 , "name": "The Shining"},{"id" : 2 , "name":"Incredibles"},{"id": 3 , "name": "Rang de basanti"}]

       let idValue = req.params.filmId 

       for(let i =0; i< movieObjectList.length; i++){
           if(movieObjectList[i].id === idValue){
               res.send(movieObjectList[idValue])
               break
           }else if (i === movieObjectList.length-1){
               res.send('No movie exists with this id')
           }

           }
       

    })
module.exports = router;