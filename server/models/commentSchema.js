const Users=require('../models/userModel')

const mongoose=require('mongoose')

const CommentSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        ref:Users
    },
    postId:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        max:500
    },
    likes:{
        type:Array,
        default:[]
    }
    },{
        timestamps:true 
    })

module.exports=mongoose.model("comment",CommentSchema)