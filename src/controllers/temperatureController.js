let axios = require("axios")

const getTemp = async function(req,res){
    try{
        
    
        let city = req.query.city
        let yourOwnId = req.query.id

        let options = {
            method : "get",
            url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${yourOwnId}`
        }

        let result = await axios(options)
        data = result.data.main.temp
        console.log(data)
        res.status(200).send({ msg : data , status : true})

    }catch(err){
        res.status(500).send({status : false , msg : err.message})

    }
}


const getSortedCity = async function(req, res){
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityArray=[]
        let cityObject={}

        for(let i = 0 ; i < cities.length ; i++){
            let  cityObject = { city : cities[0]}
            
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=a4efa0e67a30bf858a385a539afff2a3`)
            let res=resp.data.main.temp
            cityObject.temp = res
            cityArray.push(cityObject)
        }

        let sorted = cityArray.sort( function(a,b) { return a.temp - b.temp})

        console.log(sorted)
        res.status(200).send({status :true , msg : sorted})
    

    }catch(err){
        res.status(500).send({status : false , msg : err.message})

    }
}

module.exports.getTemp=getTemp
module.exports.getSortedCity=getSortedCity