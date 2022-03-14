const { timeStamp } = require("console")
const mongoose = require("mongoose")
const { object } = require("webidl-conversions")
const ObjectId = mongoose.Schema.Types.ObjectId

const createBlog = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    body : {
        type: String,
        require : true

    },
    authorId:{
        type : ObjectId,
        required : true,
        ref : "Author"
    },
    tags : {
        type : [String]
    },
    category : {
        type : String,
        require : true,

    },
    
    subCategory : {
        type : [String]
    },
    isDeleted :{
        type : Boolean,
        default: false
    },

    deletedAt : {
        type: Date,
        default : ""


   },
   isPublished : {
       type : Boolean,
       default : false
   },
   publishedAt : {
       type : Date,
       default: ""
   }

}, {timestamps : true})

module.exports=mongoose.model("Blog", createBlog)