const mongoose=require('mongoose')

const NotificationSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    receiverId:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        max:500
    },
    status:{
        type:String,
        default:"true"
    }
    },{
        timestamps:true 
    })

module.exports=mongoose.model("notification",NotificationSchema)