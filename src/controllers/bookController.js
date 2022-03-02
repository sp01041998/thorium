const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require('../models/publisherModel')

const createBook = async function (req, res) {
    let book = req.body
    console.log(book.author)
    if (book.author) {

        if (book.publisher) {

            id_publisher = book.publisher
            id_author = book.author
            
            const isValid1 = await authorModel.find({ _id: id_author })
            const isValid2 = await publisherModel.find({ _id: id_publisher})
            console.log(isValid2)
            
            if(isValid1.length==0){
                res.send("author is not valid")
            }else if(isValid2.length ==0){
                res.send("pls provide valid publisher id")

            }
            
        }else{
            res.send("pls provide publisher  id")
        }
    }else{
        res.send("pls provide auhtor id")
    }

    let bookCreated = await bookModel.create(book)
            res.send({ data: bookCreated })

}


const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})
}

//const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})



module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
