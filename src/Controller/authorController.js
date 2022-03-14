const authorModel = require("../Model/authorModel")


const createAuthor = async function (req, res) {
    try {
        let data = req.body
        if (Object.keys(data).length != 0) {
            const authorData = await authorModel.create(data)

            res.status(201).send({ status: true, msg: data })

        }else{
            res.status(400).send({status:false, msg:"body is missing"})
        }


    } catch (err) {
        res.status(400).send({ status: false, error: err.message })
    }

}


module.exports.createAuthor = createAuthor