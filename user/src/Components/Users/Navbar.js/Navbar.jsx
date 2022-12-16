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
  const [error,setError]=useState('')
  

  useEffect(() => {
    socket?.on("getNotification", data => {
      setNotifications((prev) => [...prev, data])
    })
  }, [socket])

  // console.log(notifications, "notification on nav bar");
  // console.log(notifications.length,"---");
  let num = notifications.length





  const displayNotifications = ({ senderId, type }) => {
    try {
      const fetchUser = async () => {
        const response = await axios.get('/findUser/' + senderId)
        const username = response.data.username
        const userProfilePic = response.data.profilePicture
        setUsername(username)
        // setUserProfilePic(userProfilePic)
      }
      fetchUser()
    } catch (error) {
      console.log(error)
    }

     let action;
    if (type === 1) {
      action = "liked your post";
    } else if (type === 2) {
      action = "commented on your post";
    } else {
      action = "viewed your profile";
    }
    return (
      <span className="notification">{`${senderId} ${action} your post.`}</span>
    )
    
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
  };

  const handleRead = () => {
    // setNotifications([])
    setShowNotification(false)
  }

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
              <MdNotificationsNone className='text-3xl' onClick={() => setShowNotification(!showNotification)} />
              { notifications && <span className="topbarIconBadge ">{notifications.length}</span>}             
            </div>
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
      {showNotification && 
        <div className='notifications'>
          {notifications.map((n) => displayNotifications(n))}
          <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-collapse-toggle="toast-default" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-5 h-5" fill="currentColor" onClick={handleRead} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>}
        {searchModal ? (
        <>

          <div className="p-10 mr-8  justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col min-w-[300px] bg-gray-200   ">
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


