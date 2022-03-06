const { count } = require("console")
const { updateOne } = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require('../models/publisherModel')

// const createBook = async function (req, res) {
//     let book = req.body
//     //console.log(book.author)
//     if (book.author) {

//         if (book.publisher) {

//             id_publisher = book.publisher
//             id_author = book.author

//             const isValid1 = await authorModel.find({ _id: id_author })
//             const isValid2 = await publisherModel.find({ _id: id_publisher })
//             //console.log(isValid2)

//             if (isValid1.length == 0) {
//                 res.send("author is not valid")
//             } else if (isValid2.length == 0) {
//                 res.send(" publisher id is not valid ")

//             }

//         } else {
//             res.send("pls provide publisher  id")
//         }
//     } else {
//         res.send("pls provide auhtor id")
//     }

//     let bookCreated = await bookModel.create(book)
//     res.send({ data: bookCreated })

// }


// const getBooks = async function (req, res) {
//     //let books = await bookModel.find({ratings : 4.7, price : 510})   //.populate('author').populate('publisher')
//     console.log(books)
//     res.send({ data: books })
//}
const shreyash = async function(req, res){
    let dt = await bookModel.find({ratings : 4.7 , price : 510})
}

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

//}

// const deleteall = async function(req, res){
//     let books = await bookModel.deleteMany()
//     console.log(books)
//     res.send("done")

// }




// const isHardCover = async function (req, res) {

//     let data = await bookModel.updateMany(
//         //{$or :[ {publisher  : '62206eb9d4677820eb7a7fa2'},{ publisher :'62206ef1d4677820eb7a7fa6'}]},
//         { publisher: { $in: ['62206ed3d4677820eb7a7fa4', '62206f12d4677820eb7a7fa8'] } },
//         { $set: { isHardCover: true } },
//         { new: true }
//     )

//     res.send({ msg: data })
// }

// const changeBookPrice = async function (req, res) {

//     let books = await authorModel.find({ rating: { $gt: 3.5 } }).select({_id : 1})

//     let changePrice = await bookModel.updateMany(
//         {author : { $in : books}},
//         { $inc : {price : 10}}
//     )

//     //console.log(books)

// //     for (let i = 0; i < books.length; i++) {

// //         let Price = await bookModel.find({ author:{ $in : books[i] }}).select({ price: 1, _id: 0 })
// //         console.log(Price)
// //         for ( let j =0 ; j<Price.length; j++){
// //         let x = 0
// //         x = Number(Price[j].price) + 10
// //         console.log(x)
// //         change = await bookModel.updateOne(
// //             {author : books[i]},
// //             {$set : {price : x}},
// //             console.log(j)

// //         )
// //     }
// // }
//     // console.log(books)
//     res.send("done")
// }




module.exports.shreyash=shreyash
