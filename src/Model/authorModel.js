const mongoose = require("mongoose")

const authorModel = new mongoose.Schema({
    fname : {
        type : String,
        require : true
    },
    lname : {
        type : String,
        require : true
    },
    title: {
        type : String,
        require : true,
        enum : ["Mr", "Mrs", "Miss"]
    },
    
   
emailId : {
    type : String,
    require : true,
    unique: true,
    match : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
},
password : {
    type: String,
    require : true
}


})

module.exports=mongoose.model("Author", authorModel)