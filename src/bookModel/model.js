const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema ({
    bookName : {
        type : String, // without type string require value is showing error why?
        unique : true,
        require : true

    },

    bookPrice : { 
        indianPrice : String,
        europeanPrice : String
    },

    year : {type : Number, default : 2021},

    tags : [String],

    authorName : String,

    totalPage : Number,
    
    stockAvailable : Boolean

} , {  timestamps : true } );

module.exports=mongoose.model('bookCollection', bookSchema)