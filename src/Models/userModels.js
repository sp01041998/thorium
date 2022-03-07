const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    name : String,
    balance : {
        type: Number,
        default : 100
    
    },

    address : String,
    age : Number,
    gender : {
        type : String,
        enum : ["male", "female", "others"]
    },

    isFreeAppUser : {
        type : Boolean,
        default : false
    }


})

module.exports=mongoose.model('User', userModel)