import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Post from '../Post/Post'
import Share from '../Share/Share'
import './Feed.css'
import {io} from 'socket.io-client'
import Navbar from '../Navbar.js/Navbar'


function Feed() {
  const user = useSelector((state)=> state.user)
   const [posts,setPosts]=useState([])
   const [socket,setSocket]=useState(null)
   

   useEffect(()=>{
    setSocket(io('http://localhost:2002'))
  },[])

  useEffect(()=>{
    socket?.emit("addUser",user._id)
  },[socket,user])



   useEffect (()=>{
      const fetchPost=async()=>{
        const res=await axios.get(`http://localhost:5000/post/timeline/${user._id}`,
        {headers:{"x-access-token":localStorage.getItem('usertoken')}})
        setPosts(
          res.data.sort((p1,p2)=>{
          return new Date(p2.createdAt)-new Date(p1.createdAt)
        })
       )
      }
      fetchPost()
   },[])


  return (
    <>
    <div>
    <Navbar socket={socket}/>
    </div>
    <div className='feed'>
      <div className='feedWrapper'>
        <Share/>
        {posts.length===0?
        <h1>No feeds to shown</h1>:
         <div >
         {posts.map((p)=>(
             <Post key={p.id} post={p} socket={socket}/>
        ))}
         </div>
        
        }
        
       
       
      </div>
    </div>
    </>
  )
}

export default Feed
