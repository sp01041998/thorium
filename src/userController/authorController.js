const newAuthor = require("../model/newAuthor");
const authorModel = require("../models/authorModel");

const createNewAuthor = async function(req, res){

    let authorData = req.body
    let authorCreated = await newAuthor.create(authorData)
    res.send(authorCreated)
};


const data = async function(req, res){
    let dt = await authorModel.find()
    res.send({msg : dt})
}
module.exports.createNewAuthor= createNewAuthor
module.exports.data=data