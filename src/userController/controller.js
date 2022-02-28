const bookModel = require('../bookModel/model')
const router = require('../routes/route')


const createBook = async function( req, res ) {
    let bookData = req.body
    let saveBookData = await bookModel.create(bookData)
    res.send( { msg : saveBookData } )
}

const bookList = async function(req, res) {
    let allbook = await bookModel.find().select({ bookName : 1, authorName : 1})
    //console.log(allbook)
    res.send({ msg : allbook})
}

const bookByYear = async function(req, res) {
    let year1 = req.query.Isyear
    let booklist = await bookModel.find({year : { $eq : year1} }).count()
    res.send({msg : booklist})
}

const getParticularBook = async function(req, res) {
    let data = req.query.any 
    console.log(typeof (data))
    let saveData = await bookModel.find({ $or : [{bookName : data}, {year: data}, {authorName : data}, {totalPage : data}, {stockAvailable : data}, {'bookPrice.indianPrice': data}, {'bookPrice.europeanPrice' : data}, {tags : data}] })
    console.log(saveData)
    res.send(saveData)
}




const getByPrice = async function(req, res) {
    let data5 = await bookModel.find({  'bookPrice.indianPrice' : {$in :["140Rs","1234Rs" ] } })
    console.log(data5) 
    res.send({msg : data5})
}

const getRandomBooks = async function(req, res) {
    let data = await bookModel.find( { stockAvailable : true  , totalPage : { $gte : 1500} } )
    //console.log(data)
    res.send({msg : data})
}



module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.bookByYear=bookByYear
module.exports.getByPrice = getByPrice
module.exports.getRandomBooks =getRandomBooks
module.exports.getParticularBook = getParticularBook