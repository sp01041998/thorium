const productModel = require("../Models/productModels")

const createProduct = async function(req, res){
    let pd = req.body
    let pdCreated = await productModel.create(pd)
    res.send({msg : pdCreated})
}


module.exports.createProduct=createProduct