const userModel = require("../models/userModels")

const createbookCollection = async function(req, res){
    let bookData = req.body
    let savebookData = await userModel.create(bookData)
    res.send({msg : savebookData})

} ;

const getallBooksCollection = async function(req, res){
    let allUsers = await userModel.find()
    res.send({msg : allUsers})
} ;

module.exports.createbookCollection = createbookCollection ;
module.exports.getallBooksCollection = getallBooksCollection ;
