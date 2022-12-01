import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import  './ChatOnline.css'

function ChatOnline({onlineUsers,currentId,setCurrentChat}) {
  const [friends,setFriends]=useState([])
  const [onlineFriends,setOnlinFriends]=useState([])

  useEffect(()=>{
    const getFriends=async()=>{
      console.log(currentId,'awwwwwwwwww');
      const res=await axios.get('http://localhost:5000/chat/friendlist/'+currentId)
      console.log(res,'rrrrrrrrrrrrrrrrrrrrrrrr');
      setFriends(res.data)
    }
    getFriends()
  },[currentId])

  useEffect(()=>{
   setOnlinFriends(friends.filter(f=>onlineUsers.includes(f._id)))
  },[friends,onlineUsers])

  const handleClick=async (user)=>{
    try {
      const res= await axios.get(`/chat/find/${currentId}/${user._id}`)
      setCurrentChat(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(onlineFriends,'xxxxxxxxxxxxxxxx');
  return (
    <div className="chatOnline">
      {onlineFriends?.map((o)=>(
          <div className="chatOnlineFriend" onClick={()=>handleClick(o)}>
          <div className="chatOnlineImgContainer">
            
            
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o.username}</span>
        </div>
        
      ))}
       
    </div>
  )
}

export default ChatOnline
