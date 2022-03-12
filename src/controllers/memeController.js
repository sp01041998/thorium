const axios = require("axios")

const memeCreation= async function(req, res){
    try{

        let memeId = req.query.memeId
        let text0=req.query.text0
        let text1=req.query.text1
    
        let text3=req.query.text3
        


        let option = {
            method : "post",
            url : `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&text3=${text3}&username=chewie12345&password=meme@123`
        }
        let result = await axios(option)

        let data= result.data
        console.log(data)
        res.status(200).send({msg : data})



    }catch(err){
        res.status(500).send({status : false , msg : err.message})
    }
}

module.exports.memeCreation=memeCreation