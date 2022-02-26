const mongoose = require('mongoose')

const userSchema = new mongoose.Schema( {
    bookName : String,
    authorName : String,
    category : {
        type : String,
        enum : ['physics', 'fiction','mathmatics','romantic']
    },

    yearPublished : Number,



},  {timestamps : true}

);

module.exports=mongoose.model('bookUser', userSchema)