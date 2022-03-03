const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorName : String,
    age : Number,
    rating : Number,
    address : String

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)
