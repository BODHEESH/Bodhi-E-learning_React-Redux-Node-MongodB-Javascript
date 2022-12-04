import "./Profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Navbar from "../Navbar.js/Navbar";
import { useSelector } from "react-redux";
import Feed from "../Feed/Feed";
import Courses from "./Courses";
import Post from "../Post/Post";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const [post, setPost] = useState([])
  const users = useSelector((state) => state.user)
  const [showMod, SetShowMod] = useState(false)
  const username = useParams().username;
  const [check, setCheck] = useState(false)
  const [image, SetImage] = useState('')

  const [showCourses, setShowCourses] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const [showConnections, setShowConnections] = useState(false);
  const [showFeed, setShowFeed] = useState(true);
  const [courses, setCourses] = useState('')

  // console.log(post, "post in user profile---------------------");


  useEffect(() => {
    axios.get('/http://localhost:5000/')
  })

  useEffect(() => {
    console.log('button changed');
  }, [check])

  useEffect(() => {
    axios.get(`/users?username=${username}`).then((res) => {
      setUser(res.data)
      axios.get(`http://localhost:5000/post/userpost/${res.data._id}`).then((res) => {
        console.log(res.data, 'post kittyyyyyyyyyyyyyyyyyy');
        setPost(res.data)
      })
    })
  }, [username, check])
  const FollowUser = async (id) => {
    console.log('followed user');
    try {
      const res = await axios.put(`http://localhost:5000/follow/${id}`, { userId: users._id });
      console.log(res, "log after following in right bar");
      setCheck(!check)
    } catch (err) {
      console.log(err)
    }
  }
  const UnFollowUser = async (id) => {
    console.log('unfollowed user');
    try {
      const res = await axios.put(`http://localhost:5000/unfollow/${id} `, { userId: users._id });
      console.log(res);
      setCheck(!check)
    } catch (err) {
      console.log(err)
    }

  }

  return (

    <div>
      <main className="bg-gray-100 bg-opacity-25">

        <div className="lg:w-8/12 lg:mx-auto mb-8 ">


          <header className="flex flex-wrap items-center p-4 md:pt-20 sm:pt-16 ">

            <div className="md:w-3/12 md:ml-16">


              <img className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
               border-2 p-1" src={user?.profilePicture ? PF + user?.profilePicture : '/assets/avatar.jpg'} alt="profile" />
            </div>
            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {user?.username}
                </h2>
                {user?.followers?.includes(users._id) ?
                  <button className='followButton' onClick={(e) => { UnFollowUser(user._id) }}>Unfollow</button> :
                  <button className='followButton' onClick={(e) => { FollowUser(user._id) }}>Follow</button>
                }
              </div>


              <ul className="hidden md:flex space-x-8 mb-4">
                <li>
                  <span className="font-semibold">{user?.followers?.length}</span>
                  followers
                </li>
                <li>
                  <span className="font-semibold">{user?.followings?.length}</span>
                  following
                </li>
              </ul>


              <div className="hidden md:block">
                <h1 className="font-semibold">{user?.email}</h1>
              </div>
            </div>
          </header>


          <div className="px-px md:px-3">
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
                          name="name"
                          placeholder="name"
                        // onChange={handleChange}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add profile pic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="file" onClick={(e) => SetImage(e.target.files[0])}

                        />
                        <br /> <br />
                        <input
                          type="text"
                          name="email"
                          placeholder="email"
                        // onChange={handleChange}
                        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="text"
                          name="password"
                          placeholder="change password"
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
                        // onClick={handleEdit}
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

            {showFeed  ?
            
            post.map((p)=>(
              <Post key={p.id} post={p} />
         ))
            : null}

            {showPost &&
              <div className="flex flex-wrap -mx-px md:-mx-3">


                {post?.map((obj) => {
                  return (
                    <>
                      {obj?.img?.length !== 0 && (

                        <div className="w-1/3 p-px md:px-3">

                          <div>


                            <a href="#">
                              <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                                {obj.img ?

                                  <img className="w-full h-full absolute left-0 top-0 object-cover" src={PF + obj.img} alt="image" /> :
                                  <img className="w-full h-full absolute left-0 top-0 object-cover" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/167121800/original/91edbdbc9875196cc50f56337f4e1aea00534b12/your-awesome-mern-stack-developer.jpg" alt="images" />
                                }
                                <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                              left-0 top-0 hidden">
                                  <div className="flex justify-center items-center 
                            space-x-4 h-full">
                                    <span className="p-2">
                                      <i className="fas fa-heart"></i>
                                      {obj.likes.length}
                                    </span>


                                  </div>
                                </div>

                              </article>
                            </a>
                          </div>

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
        {/* {showConnections ? <Feed /> : null} */}
        {showConnections ? <Feed /> : null}
      </div>


      {/* <>
        <div className="profile">
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={
                    user.coverPicture
                      ? PF + user.coverPicture
                      : "/assets/cover1.jpg"
                  }
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : "/assets/avatar.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.email}</span>
              </div>
              <div className='follow'>
                Followers{user?.followers?.length}<br />
                Followings{user?.followings?.length}
              </div>

              <div className="px-px md:px-3">
                <ul className="flex items-center justify-around md:justify-center space-x-12  
                    uppercase tracking-widest font-semibold text-xs text-gray-600
                    border-t">

                  <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                    <a className="inline-block p-3" href="#">
                      <i className="fas fa-th-large text-xl md:text-xs"></i>
                      <span className="hidden md:inline">post</span>
                    </a>
                  </li>
                </ul>
                <div className="flex flex-wrap -mx-px md:-mx-3">
                  {post?.map((obj) => {
                    return (

                      <div key={obj} className="w-1/3 p-px md:px-3">
                        <a href="#">
                          <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                            <img className="w-full h-full absolute left-0 top-0 object-cover" src={PF + obj.img} alt="image" />

                            <i className="fas fa-square absolute right-0 top-0 m-1"></i>
                            <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                              left-0 top-0 hidden">
                              <div className="flex justify-center items-center 
                                  space-x-4 h-full">
                                <span className="p-2">
                                  <i className="fas fa-heart"></i>
                                  {obj?.likes?.length}
                                </span>

                                <span className="p-2">
                                  <i className="fas fa-comment"></i>
                                  2,909
                                </span>
                              </div>
                            </div>

                          </article>
                        </a>
                      </div>

                    )
                  })
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
      </> */}
    </div>

  );
}