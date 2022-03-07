

const headerCheck = async function(req, res, next){
    data = req.headers.isfreeappuser
    let x=JSON.stringify(data)

    console.log(typeof x)
    if(data){
        next()
    }else{
        res.send("missing a mandtory header")
    }

}

module.exports.headerCheck=headerCheck