const mongoose=require('mongoose')

const ReportSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    postId:{
        type:String,
        required:true
    },
    Content:{
        type:String,
        max:500
    }
    },{
        timestamps:true 
    })

module.exports=mongoose.model("report",ReportSchema)