const express = require('express');
const router = express.Router();



let arr = []
// 1st part solution


router.post('/player', function (req, res) {
    let details = req.body.name
    //console.log(details)
    let inputDetails = req.body
    //console.log(inputDetails)
    
    for (let i = 0; i < arr.length; i++) {
        if (details == arr[i].name) {
            //console.log("Data already exist")
            return res.send("Data already exist")
        } 
        
       
            
        
    }
    arr.push(inputDetails)
    //console.log("afetr adding :",arr) 
    return res.send(arr)
    // res.send("hello wrold")

})


router.post('/players/:playerName/bookings/:bookingId', function(req,res){
    let playerId = req.body


    let plName = req.params.playerName

    let bkId= req.params.bookingId

    for ( let i = 0 ; i < arr.length ; i++){
        if(plName === arr[i].name){
            for( let j = 0 ; j<(arr[i].bookings.length); j++){
                if(bkId === arr[i].bookings[j].bookingNumber){
                    return res.send("booking was already processed")
                }else if ( j === arr[i].bookings.length-1){
                    
                    res.send(arr)
                    
            }
            
            
            

        }arr[i].bookings.push(playerId)
        return res.send(arr)

    
    }
})
module.exports = router;





module.exports = router;