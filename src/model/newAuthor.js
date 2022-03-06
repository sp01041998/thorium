const mongoose = require('mongoose')

const newAuthorSchema = new mongoose.Schema({
    authorName : String,
    age : Number,
    address : Number
})

module.export=mongoose.model('newAuthor', newAuthorSchema)