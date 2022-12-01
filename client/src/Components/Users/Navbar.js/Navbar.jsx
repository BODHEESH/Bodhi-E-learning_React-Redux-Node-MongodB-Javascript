import React, { useContext, useState } from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout} from '../../../redux/userSlice';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { MoreVert } from '@mui/icons-material';

import bodhiLenear from "../../../assets/bodhiLenear.png";

function Navbar() {
  const user = useSelector((state)=> state.user)
  const navigate=useNavigate()
  const [drop,setDrop]=useState(false)
  const dispatch=useDispatch();
    const handleLogout=async(e)=>{
      e.preventDefault();
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't logout!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes,logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'logout!',
            'success'
          )
        }
      })
      localStorage.removeItem('user')
      dispatch(logout())
      await axios.post('http://localhost:5000/logout')
      navigate('/')
      
    }
   
  return (
    <div className='topbarContainer'>
     <div className="topbarLeft">
      <Link to='/home' style={{textDecoration:"none"}}>
      {/* <span className="logo"></span> */}
      <img className="img" src={bodhiLenear} alt="" />
      </Link>
     </div>
     <div className="topbarCenter">
      <div className="searchBar">
       <SearchIcon className='searchIcon'/>
       <input className='searchInput' placeholder='Search for friend, post or video' />
      </div>
     </div>
     <div className="topbarRight">
       <div className='topbarIcons'>
        <div className='topbarIconItem'>
          <Link  to='/landingpage' style={{textDecoration:"none"}}>
        <HomeIcon/>
          </Link>
        </div>
        <div className='topbarIconItem'>
        <FavoriteBorderIcon/>
        </div>
        {/* <div className='topbarIconItem'>
        <AddBoxIcon/>
        </div> */}
        <div className='topbarIconItem'>
        {/* <Link to='/chat'>
        <ChatIcon/>
        </Link> */}
        <span className="topbarIconBadge">2</span>
        <ChatIcon/>
        </div>
        <div className='topbarIconItem'>
        <NotificationsIcon/>
        <span className="topbarIconBadge">5</span>
        </div>
       </div>
       <>
     <div class="flex justify-center">
     <div class="relative inline-block">
         

     <img src="https://i.pinimg.com/736x/df/c8/e2/dfc8e2e6d1959ee1e4209a3d2918f190.jpg" alt="" className="topbarImg" onClick={()=>setDrop(!drop)}/>

        {/* <button class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-100 focus:border-radious-20 ">
            <span class="mx-1"><MoreVert /></span>
        </button> */}

        {drop?
        <div class="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">

        <hr class="border-gray-200 dark:border-gray-700 "/>
        
        <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
          <Link to={`/userProfile`}>view profile</Link>
        </a>

        <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
          <span onClick={(e)=>handleLogout(e)}>logout</span> 
        </a>


        </div>:null
        }
        
    </div>
     </div>
    </>
       {/* <Link to='/userProfile'> */}
      
        {/* </Link> */}
       {/* <button onClick={(e)=>handleLogout(e)}>Logout</button> */}
     </div>
    </div>
  )
}

export default Navbar


