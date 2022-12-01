import axios from 'axios'
import { useEffect, useState } from 'react'
import  './Conversation.css'

function Conversation({conversation,currentUser}) {
  const [user,setUser]=useState(null) 
   useEffect(()=>{
       const friendId=conversation.members.find((m)=>m!==currentUser._id)
       const getUser=async()=>{
        try {
            const res=await axios.get(`/users?userId=${friendId}`)
            setUser(res.data)  
        } catch (error) {
           console.log(error);  
        }
      }
      getUser()

    },[currentUser._id,conversation])
    
  return (
    <div className='conversation'>
        <img className='conversationImage'src="/assets/b2.webp" alt=''/>
        <span className='convarsationName'>{user?.username}</span>
    </div>
  )
}

export default Conversation
