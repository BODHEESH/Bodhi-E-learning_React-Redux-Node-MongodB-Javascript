const io=require("socket.io")(2002,{
    cors:{
        origin:"http://localhost:3000",
    }
})

let users=[]

const addUser=(userId,socketId)=>{
    !users.some((user)=>user.userId===userId)&&
    users.push({userId,socketId})

}

const removeUser=(socketId)=>{  
   users=users.filter((user)=>user.socketId!==socketId) 
}


const getUser=(userId)=>{
    return users.find((user)=>user.userId===userId)
}  

io.on("connection",(socket)=>{     
    /* -------------------------------------------------------------------------- */
    /*                                when connect                                */
    /* -------------------------------------------------------------------------- */
     console.log('user is connected');
    /* -------------------------------------------------------------------------- */
    /*                     take userId and socket id from user                    */
    /* -------------------------------------------------------------------------- */
    socket.on("addUser",(userId)=>{
        addUser(userId,socket.id)
        io.emit("getUsers",users)
    })


    /* -------------------------------------------------------------------------- */
    /*                           send and get a message                           */
    /* -------------------------------------------------------------------------- */
    socket.on("sendMessage",({senderId,receiverId,text})=>{
      const user=getUser(receiverId)
      io.to(user.socketId).emit("getMessage",{
        senderId,
        text,

      })
    })
  
    /* -------------------------------------------------------------------------- */
    /*                              For Notifications                             */
    /* -------------------------------------------------------------------------- */
    // socket.on("sendNotification",({senderId,receiverId,type})=>{
    //     console.log(senderId,receiverId,type);
    //    const receiver=getUser(receiverId)
    //    console.log(receiver,"-----------------------------------");
    //    io.to(receiver.socketId).emit("getNotification",{
    //       senderId,
    //       type,
    //    })  
    // })   
    

    socket.on("sendNotification",({senderId,receiverId,type})=>{
        const receiver=getUser(receiverId)
        console.log(receiver);
        io.to(receiver?.socketId).emit("getNotification",{
           senderId,
           type,
        })
     }) 

    /* -------------------------------------------------------------------------- */
    /*                               when disconnect                              */
    /* -------------------------------------------------------------------------- */
    socket.on("disconnect",()=>{
     console.log('user is disconnetced');   
     removeUser(socket.id)  
     io.emit("getUsers",users)   
    })
   
}) 
