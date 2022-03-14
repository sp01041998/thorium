const authorModel = require("../Model/authorModel")


const createAuthor = async function(req, res){
    let data = req.body
    const authorData = await authorModel.create(data)

    res.send({status : true , msg : data})
}


module.exports.createAuthor=createAuthor