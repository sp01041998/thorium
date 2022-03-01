const book = require('../Author-book_Model/book')
const authorBook = require('../Author-book_Model/author-model')
const { modelName } = require('../Author-book_Model/book')

const createAuthor = async function (req, res) {
    let data = req.body
    let saveData = await authorBook.create(data)
    res.send({ msg: saveData })
}
const createBook = async function (req, res) {
    let data = req.body
    let saveData = await book.create(data)
    res.send({ msg: saveData })
}

const bookByChetan = async function (req, res) {
    let id1 = await authorBook.findOne({ author_name: "Chetan Bhagat" }).select({ author_id: 1, _id: 0 })
    console.log(id1)
    let books = await book.find(id1)
    console.log(books)
    res.send(books)

}

const bookUpdate = async function (req, res) {
    let id = await book.findOneAndUpdate(
        { name: "Two States" },
        { $set: { price: 100 } },
    ).select({ author_id: 1, price: 1, _id: 0 })

    console.log(id)



    let authorName = await authorBook.findOne({ author_id: id.author_id }).select({ author_name: 1, _id: 0 })

    res.send({ authorName, price: id.price })

}

const bookByPrice = async function(req, res){
    let bkName = await book.find({ price : {$gte : 50, $lte : 100}}).select({author_id:1,name : 1, _id :0})
    //console.log(bkName)

    let obj1 = []
    
    for ( let i = 0 ; i < bkName.length ; i++){

    let authorName = await authorBook.find({author_id :bkName[i].author_id}).select({author_name :1, _id:0})
    obj1.push([ {"name" : bkName[i].name}])
    obj1[i].push(authorName[0])
    
    
}
   console.log("author and Movie Name",obj1)
   res.send({msg : obj1})

    }




module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.bookByChetan = bookByChetan
module.exports.bookUpdate = bookUpdate
module.exports.bookByPrice=bookByPrice