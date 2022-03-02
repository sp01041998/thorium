const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const ObjectId = mongoose.Schema.Types.ObjectId
const ObjectId2 = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author : {
        type: ObjectId,
        ref: "Author",
        
    },
    price: Number,
    ratings: Number,

    publisher : {
        type : ObjectId2,
        ref : "Publisher",
        

    }



}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
