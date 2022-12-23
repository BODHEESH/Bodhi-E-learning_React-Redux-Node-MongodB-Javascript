import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/userSlice';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Favorite, MoreVert } from '@mui/icons-material';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BiHome} from "react-icons/bi";
import { FiMessageSquare} from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import NotFound from '../../NotFound';
import {format}  from 'timeago.js'


import bodhiLenear from "../../../assets/bodhiLenear.png";

function Navbar({ socket }) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const [drop, setDrop] = useState(false)
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  const [username, setUsername] = useState('')
  const [search, setSearch] = useState('')
  const [userFound, setUserFound] = useState([])
  const [searchModal, setSearchModal] = useState(false)
  const [sender,setSender]=useState('')
  const [error,setError]=useState('')
  const [count,setCount]=useState('')
  const [change,setChange]=useState()
  



console.log(user,"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuusssssssssssssssserrrrrrrrrrrrrrrrrr");



  useEffect(()=>{
    socket?.on("getNotification",data=>{
      setChange(new Date())
    })
   
  },[socket])

   useEffect(()=>{
    const fetchNotification = async () => {
      axios.get(`http://localhost:5000/notification/${user._id}`).then((response)=>{
      setNotifications(response.data.notification)
      setCount(response.data.countLength)
    }) }
    fetchNotification()
   },[count,socket,change])
  
  console.log(count,'kkkkkkkkkkkkkkkkkkkkk');


  const handleRead=async(e)=>{
    setShowNotification(!showNotification)
    console.log("423856923456239456238469875698");
      try {
        const { data } = await axios.put(`http://localhost:5000/notification/viewed/${user._id}`);
        console.log(data,"daaaaaaaaaaaataaaaaaaaaaaaaaaaaa");
        setCount('')
      } catch (error) {
        console.log(error);
      }
   }













  // const displayNotifications = ({ senderId, type }) => {
  //   try {
  //     const fetchUser = async () => {
  //       const response = await axios.get('/findUser/' + senderId)
  //       const username = response.data.username
  //       const userProfilePic = response.data.profilePicture
  //       setUsername(username)
  //       // setUserProfilePic(userProfilePic)
  //     }
  //     fetchUser()
  //   } catch (error) {
  //     console.log(error)
  //   }

  //    let action;
  //   if (type === 1) {
  //     action = "liked your post";
  //   } else if (type === 2) {
  //     action = "commented on your post";
  //   } else {
  //     action = "viewed your profile";
  //   }
  //   return (
  //     <span className="notification">{`${senderId} ${action} your post.`}</span>
  //   )
  // };
    
    // let action;
    // if (type === 1) {
    //   action = "liked your post";
    // } else if (type === 2) {
    //   action = "commented on your post";
    // } else {
    //   action = "viewed your profile";
    // }
    // return (
    //   <div class="max-w-2xl mx-auto z-50 m-1 bg-transparent">

    //     <div id="toast-default"
    //       class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
    //       role="alert">

    //       {action === "liked your post" &&
    //         <div
    //           class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
    //           <Favorite style={{ color: "red" }} />
    //         </div>
    //       }
    //       {action === "commented on your post" &&
    //         <div
    //           class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
    //           <MarkUnreadChatAltIcon style={{ coloe: "blue" }} />
    //         </div>}
    //       {action === "viewed your profile" &&
    //         <div
    //           class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
    //           <AccountCircleIcon style={{ coloe: "yellow" }} />
    //         </div>}
    //       <div> <img className='w-5 h-5 rounded-full' src=""></img></div>

    //       <div class="ml-3 text-sm font-normal">{`${username} ${action}.`}</div>
    //     </div>
    //   </div>
    //   // <span className="notification">{`${senderId} ${action} your post.`}</span>
    // );


  // const handleRead = () => {
  //   // setNotifications([])
  //   setShowNotification(false)
  // }

  const handleSearch = async (e) => {
    try {
      if (e.target.value.length > 0) { 
        setSearchModal(true)
      } else {
        setSearchModal(false)
      }
      const search = e.target.value
      const user = await axios.put(`http://localhost:5000/search/User`, { search })
      setUserFound(user.data)
    } catch (error) {
      console.log(error);
      setError(error)
    }

  }


  const handleLogout = async (e) => {
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
    <>
     {error ? <NotFound error={error}/>:

      <div className='topbarContainer bg-gray-100'>
        <div className="topbarLeft">
          <Link to='/home' style={{ textDecoration: "none" }}>
            {/* <span className="logo"></span> */}
            <img className="img" src={bodhiLenear} alt="" />
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <SearchIcon className='searchIcon' />
            <input className='searchInput' placeholder='Search for friend'  onChange={handleSearch} />
          </div>
        </div>
        <div className="topbarRight">
          <div className='topbarIcons'>
            {/* <div className='topbarIconItem'>
              <Link to='/landingpage' style={{ textDecoration: "none" }}>
                <BiHome className=' h-6'/>
              </Link>
            </div> */}
            {/* <div className='topbarIconItem'>
              <FavoriteBorderIcon />
            </div> */}
            {/* <div className='topbarIconItem'>
        <AddBoxIcon/>
        </div> */}
            <div className='topbarIconItem'>
              <Link to='/chat'>
                <FiMessageSquare className=' text-3xl'/>
              </Link>
              <span className="topbarIconBadge">2</span>
              {/* <ChatIcon /> */}
            </div>
            <div className='topbarIconItem flex'>
              <MdNotificationsNone className='text-3xl' onClick={(e) =>handleRead(e)} />
              {count!==0 &&<span className="topbarIconBadge">{count}</span>}             
            </div>
            {/* <div className='topbarIconItem flex'>
              <MdNotificationsNone className='text-3xl' onClick={() => setShowNotification(!showNotification)} />
              { notifications && <span className="topbarIconBadge ">{notifications.length}</span>}             
            </div> */}
          </div>
          <>
            <div class="flex justify-center">
              <div class="relative  flex justify-center ">

                 {/* <span><h3 className='font-bold'>{user.username}</h3></span> */}
                <img src={user.profilePicture ? PF + user.profilePicture : 'https://i.stack.imgur.com/34AD2.jpg'} alt="" className="profileImg" onClick={() => setDrop(!drop)} />

                {drop ?
                  <div class="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">

                    <hr class="border-gray-200 dark:border-gray-700 " />

                    <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      <Link to={`/userProfile`}>view profile</Link>
                    </a>

                    <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span onClick={(e) => handleLogout(e)}>logout</span>
                    </a>


                  </div> : null
                }

              </div>
            </div>
          </>
          {/* <Link to='/userProfile'> */}

          {/* </Link> */}
          {/* <button onClick={(e)=>handleLogout(e)}>Logout</button> */}
        </div>
      </div> }
      {showNotification ?(
     <>
     <div class="notificationDrop absolute right-0 z-20 w-100 py-2   bg-white rounded-md shadow-xl dark:bg-gray-200 m-5 mr-52 overflow-y-auto max-h-44 scrollbar-hide">
       {notifications?.length !== 0 ? (
         notifications?.map((obj) => {
           return (
             <a  href="#" class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-blue-300 dark:hover:text-white">
              <img className="w-10 h-10 rounded-full"  src={obj.senderId.profilePicture ? PF + obj.senderId.profilePicture : 'https://i.stack.imgur.com/34AD2.jpg'}></img>

               <div class="mx-1">
                 <h1 class="text-sm font-bold text-gray-700 dark:text-gray-900">
                   {obj.senderId.username}
                    
                   {obj.type==='1' && <span class="text-sm text-gray-900 dark:text-gray-900 "> Liked your post</span> }
                   {obj.type==='2' && <span class="text-sm text-gray-900 dark:text-gray-900 "> commented on your post</span> }
                   {obj.type==='3' && <span class="text-sm text-gray-900 dark:text-gray-900 "> viewed your profile </span> }
                 </h1>
                  
                 <span className="text-xs font-semibold text-gray-900">
                   {format(obj.createdAt)}
                 </span>
               </div>
             </a>
           );
         })
       ) : (
         <p className="p-2 text-center font-bold">No notifications</p>
       )}
     </div>
   </>
 ): null}
        {searchModal ? (
        <>

          <div className="p-10 mr-8  justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col min-w-[300px] bg-gray-100   ">
                {userFound.map((u) => (
                  <div className="flex">
                    <div className="p-4 flex  items-center">
                      <Link to={`/profile/${u.username}`}>
                        <div> <img className="w-10 h-10 rounded-full"  src={u.profilePicture ? PF + u.profilePicture : 'https://i.stack.imgur.com/34AD2.jpg'}></img></div>
                      </Link>
                      <div><h2 className="font-bold">{u.username}</h2>
                        <span className="text-xs">{u.email}</span></div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>



        </>
      ) : null}
      
    </>
  )
}

export default Navbar


