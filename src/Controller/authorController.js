const authorModel = require("../Model/authorModel")


const createAuthor = async function(req, res){
    try{
        let data = req.body
    const authorData = await authorModel.create(data)

    res.send({status : true , msg : data})

    }catch(err){
        res.status(400).send({status : false , error : err.message})
    }
    
}


module.exports.createAuthor=createAuthor