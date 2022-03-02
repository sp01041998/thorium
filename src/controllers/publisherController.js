const publisherModel = require('../models/publisherModel')

const createPublisher = async function(req, res){
    let publisherData = req.body
    let publisherCreated = await publisherModel.create(publisherData)
    res.send({msg : publisherCreated})
}

module.exports.createPublisher=createPublisher