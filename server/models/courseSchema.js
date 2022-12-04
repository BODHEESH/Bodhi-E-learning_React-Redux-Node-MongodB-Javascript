const mongoose=require('mongoose')

const courseSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    courseName:{
        type:String,
        max:500
    },
    desc:{
        type:String,
        max:500
    },
    img:{
        type:String
    },
    video:{
        type:String
    },
    likes:{
        type:Array,
        default:[]
    },
    review:{
        type:Array,
        default:[]
    }
    },{
        timestamps:true 
    })

module.exports=mongoose.model("course",courseSchema)