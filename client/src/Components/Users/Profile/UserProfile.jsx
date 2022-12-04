import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar.js/Navbar';
import './Profile.css'
import Swal from 'sweetalert2'
import { login } from '../../../redux/userSlice'
import Courses from './Courses';
import Feed from '../Feed/Feed';
import Post from '../Post/Post';



function UserProfile() {
  const dispatch = useDispatch();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = useSelector((state) => state.user)
  const [edit, setEdit] = useState([])
  const [post, setPost] = useState([])
  const [showMod, SetShowMod] = useState(false)
  const [showCourses, setShowCourses] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const [showConnections, setShowConnections] = useState(false);
  const [showFeed, setShowFeed] = useState(true);
  const [courses, setCourses] = useState('')


  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/" + user._id, { ...edit, userId: user._id })
      axios.put("http://localhost:5000/" + user._id, { ...edit, userId: user._id })
        .then((response) => {
          dispatch(login(response.data))
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your details is updated successfully',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(response, 'updated suceesfullyyyyyyyyyyyyyyyyyy');

        });
      SetShowMod(false)

    } catch (error) { }

  }



  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5000/post/userpost/${user._id}`);
      // setPost(res.data);
      setPost(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt)
        })
      )
      console.log(res);
    };
    fetchPost();
  }, [user._id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit({
      ...edit,
      [name]: value,
    })
  };



  //   useEffect (()=>{
  //     const fetchCourse=async()=>{
  //       const res=await axios.get(`http://localhost:5000/course/getCourses/${user._id}`,
  //       {headers:{"x-access-token":localStorage.getItem('usertoken')}})

  //       console.log(res,"get courses in courses-------------------");
  //       setCourses(
  //         res.data.sort((p1,p2)=>{
  //         return new Date(p2.createdAt)-new Date(p1.createdAt)
  //       })
  //      )
  //     }
  //     fetchCourse()
  //  },[])



  return (
    <div>
      <Navbar />
      <main class="bg-gray-100 bg-opacity-25">

        <div class="lg:w-8/12 lg:mx-auto mb-8">

          <header className="flex flex-wrap items-center p-4 md:pt-20 sm:pt-16 ">

            <div class="md:w-3/12 md:ml-16">


              <img class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                   border-2 p-1" src={user.profilePicture ? PF + user.profilePicture : '/assets/avatar.jpg'} alt="profile" />
            </div>
            <div class="w-8/12 md:w-7/12 ml-4">
              <div class="md:flex md:flex-wrap md:items-center mb-4">
                <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {user.username}
                </h2>
                {/* badge  */}
                <span class="inline-block fas fa-certificate fa-lg text-blue-500 
                               relative mr-6 text-xl transform -translate-y-2" aria-hidden="true">
                  <i class="fas fa-check text-white text-xs absolute inset-x-0
                               ml-1 mt-px"></i>
                </span>
                <a href="#" class="bg-blue-500 px-2 py-1 
                      text-white font-semibold text-sm rounded block text-center 
                      sm:inline-block "  onClick={() => SetShowMod(true)}>Edit profile</a>
              </div>


              <ul class="hidden md:flex space-x-8 mb-4">
                {/* <li>
          <span class="font-semibold">{user.posts.length}</span>
          posts
        </li> */}

                <li>
                  <span class="font-semibold">{user.followers.length}</span>
                  followers
                </li>
                <li>
                  <span class="font-semibold">{user.followings.length}</span>
                  following
                </li>
              </ul>


              <div class="hidden md:block">
                <h1 class="font-semibold">{user.email}</h1>
                {/* <span>Travel, Nature and Music</span>
        <p>Lorem ipsum dolor sit amet consectetur</p> */}
              </div>
            </div>
          </header>


          <div class="px-px md:px-3">
            <ul class="flex items-center justify-around md:justify-center space-x-12  
                  uppercase tracking-widest font-semibold text-xs text-gray-600
                  border-t">

              <li onClick={(e) => { setShowFeed(!showFeed); setShowPost(false); setShowCourses(false); setShowConnections(false) }} class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <a class="inline-block p-3" href="#">
                  <i class="fas fa-th-large text-xl md:text-xs"></i>
                  <span class="hidden md:inline pl-2">FEED</span>
                </a>
              </li>
              <li onClick={(e) => { setShowPost(!showPost); setShowFeed(false); setShowCourses(false); setShowConnections(false) }} class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <a class="inline-block p-3" href="#">
                  {/* <i class="fas fa-th-large text-xl md:text-xs"></i> */}
                  <i class="fa fa-camera-retro fa-lg"></i>
                  <span class="hidden md:inline pl-2">PHOTO</span>
                </a>
              </li>
              <li onClick={(e) => { setShowCourses(!showCourses); setShowFeed(false); setShowConnections(false); setShowPost(false) }} class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <a class="inline-block p-3" href="#">
                  <i class="fas fa-th-large text-xl md:text-xs"></i>
                  <span class="hidden md:inline">LAUNCHED COURSES</span>
                </a>
              </li>
              <li onClick={(e) => { setShowConnections(!showConnections); setShowFeed(false); setShowPost(false); setShowCourses(false) }} class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <a class="inline-block p-3" href="#">
                  <i class="fas fa-th-large text-xl md:text-xs"></i>
                  <span class="hidden md:inline">CONNECTIONS</span>
                </a>
              </li>
            </ul>
            {showMod ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">

                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Edit your details</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => SetShowMod(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <input
                          type="text"
                          name="username"
                          placeholder="Enter the username"
                          onChange={handleChange}
                        />
                        <input className='ml-5'
                          type="file"

                        />
                        {/* <span className='text-sm'>Update your profile pic</span> */}
                        <br /> <br />
                        <input
                          type="text"
                          name="email"
                          placeholder="Enter the email"
                          onChange={handleChange}
                        />
                        <input className='ml-5'
                          type="password"
                          name="password"
                          placeholder="change password"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => SetShowMod(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={handleEdit}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}


            {showFeed &&
              post.map((p) => (
                <Post key={p.id} post={p} />
              ))}


            {showPost &&

              <div class="flex flex-wrap -mx-px md:-mx-3">


                {post.map((obj) => {
                  return (
                    <>
                      {obj?.img?.length !== 0 && (
                        <div class="w-1/3 p-px md:px-3">

                          <a href="#">
                            <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
                              <img class="w-full h-full absolute left-0 top-0 object-cover" src={PF + obj.img} alt="image" />

                              {/* <i class="fas fa-square absolute right-0 top-0 m-1"></i> */}
                              <div class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                               left-0 top-0 hidden">
                                <div class="flex justify-center items-center 
                                   space-x-4 h-full">
                                  <span class="p-2">
                                    <i class="fas fa-heart"></i>
                                    {obj.likes.length}
                                  </span>

                                </div>
                              </div>

                            </article>
                          </a>
                        </div>
                      )}


                    </>

                  )
                })
                }

              </div>
            }



          </div>
        </div>
      </main>
      <div>
        {showCourses ? <Courses /> : null}
      </div>
      <div>
        {showConnections ? <Feed /> : null}
      </div>
    </div>
  )
}

export default UserProfile
