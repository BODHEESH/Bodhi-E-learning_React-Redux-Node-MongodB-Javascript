import { useState } from "react";
import { useEffect } from "react";
import "./Rightbar.css";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Rightbar() {
  const [users,setUsers]=useState([])
  const user = useSelector((state)=> state.user)
  const [check,setCheck]=useState(false)

  const PF=process.env.REACT_APP_PUBLIC_FOLDER



  useEffect(() => {
    console.log("button changed");
  }, [check]);


  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const allUsers = await axios.get(`/admin/users`);
  //     if (allUsers) {
  //       setUsers(allUsers.data);
  //     } else {
  //       console.log("error");
  //     }
  //   };
  //   fetchUsers();
  // }, [check]);


  useEffect(()=>{
    const fetchUsers=async()=>{
     const allUsers=await axios.get(`/suggestions/${user._id}`)
     if(allUsers){
      setUsers(allUsers.data)
     }else{
      console.log('error');
     }
    }
    fetchUsers()
  },[check])


  const FollowUser = async (id) => {
    console.log("followed user");
    try {
      const res = await axios.put(`http://localhost:5000/follow/${id}`, { userId: user._id});
      console.log(res);
      setCheck(!check);
    } catch (err) {
      console.log(err);
    }
  };
  const UnFollowUser = async (id) => {
    console.log("unfollowed user");
    try {
      const res = await axios.put(`http://localhost:5000/unfollow/${id} `, { userId: user._id,});
      console.log(res);
      setCheck(!check);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>


      <div className="rightBar">
        <div className="container">
          <div className="list">
            <span className="suggessions">Suggestions For You</span>

            {users.map((obj) => (
              <>
                {obj.username !== user.username && (
                  <div className="user">
                    <div className="userInfo">
                      <Link to={`/profile/${obj.username}`}>
                        <img
                          class="w-12 h-12 rounded-full bg-gray-100"
                          src={obj.profilePicture ? PF + obj.profilePicture : 'https://i.stack.imgur.com/34AD2.jpg'}  alt=""></img>
                      </Link>
                      <span className="name">{obj.username}</span>
                    </div>
                    <div className="buttons">
                      {/* <button className="followButton">follow</button>
                      <button className="skipButton">Skip</button> */}

                      {user?.followers?.includes(obj._id) ?
                    //   <button className='followButton' onClick={(e) => { FollowUser(obj._id) }}>Follow</button>:
                    //  <button className='followButton' onClick={(e) => { UnFollowUser(obj._id) }}>Unfollow</button>
                    //   }
                     <button className='followButton' onClick={(e) => { UnFollowUser(obj._id) }}>Unfollow</button>:
                      <button className='inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={(e) => { FollowUser(obj._id) }}>Follow</button>}
                    </div>
                    
                  </div>
                )}
              </>
            ))}

          </div>
          {/* <div className="list">
            <span>Latest Courses</span>
            <div className="user">
              <div className="userInfo">
               
                <img
                  className="rightbarPic"
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              
                <p>
                  <span>Bodhi test</span>
                  <p className=" pTag	text-decoration-color: #94a3b8; text-sm">
                    updated a new course
                    <Link to="/coursefeed" >
                    <span className="font-bold text-blue-700">Click here</span>
                    </Link>
                  </p>
                </p>
               
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
               
                <img
                  className="rightbarPic"
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              
                <p>
                  <span>Bodhi test</span>
                  <p className=" pTag	text-decoration-color: #94a3b8; text-sm">
                    updated a new course
                    <Link to="/coursefeed" >
                    <span className="font-bold text-blue-700">Click here</span>
                    </Link>
                  </p>
                </p>
               
              </div>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="list">
            <span>Top Educators</span>
            <div className="user">
              <div className="userInfo">
                <img
                  className="rightbarPic"
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>Bodhi test</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  className="rightbarPic"
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>Bodhi test</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  className="rightbarPic"
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>Bodhi test</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  className="rightbarPic"
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>Bodhi test</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  className="rightbarPic"
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>Bodhi test</span>
              </div>
            </div>

            <div className="user">
              <div className="userInfo">
                <img
                  className="rightbarPic"
                  src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="online" />
                <span>Bodhi test</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>

    // <div>
    //   <div class=" h-screen w-full justify-center">
    //     <div class="max-w-full grid grid-cols-2 gap-4">
    //       {users.map((obj) => {
    //         return (
    //           <div class="bg-white shadow-xl rounded-lg py-2 ">
    //             <div class="photo-wrapper p-2">
    //               <img
    //                 class="w-20 h-20 rounded-full mx-auto"
    //                 src="/assets/a1.jpg"
    //                 alt="John Doe"
    //               />
    //             </div>
    //             <div class="p-2">
    //               <h3 class="text-center text-xl text-gray-800 font-extralight leading-8">
    //                 {obj.username}
    //               </h3>
    //               <div class="text-center text-gray-400 text-xs font-semibold truncate">
    //                 <h6>{obj.email}</h6>
    //               </div>
    //               {/* <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a> */}

    //               {obj.followers.includes(user._id) ? (
    //                 <div class="text-center my-3">
    //                   <Link to={`/profile/${obj.username}`}>
    //                   <button
    //                     className="btn bg-neutral-400 text-white p-1"
    //                     // onClick={(e) => {
    //                     //   handleSubmitUndo(obj._id);
    //                     // }}
    //                   >
    //                    View profile
    //                   </button>
    //                   </Link>
    //                 </div>
    //               ) : (
    //                 <div class="text-center my-3">
    //                   <button
    //                     className="btn bg-neutral-400 text-white p-1"
    //                     onClick={(e) => { FollowUser(obj._id) }}
    //                   >
    //                     Follow
    //                   </button>
    //                 </div>
    //               )}
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>

    //   <div className='rightbar'>
    //         <div class="sidebar">
    // <div class="sidebar-menu-container">
    //   {/* <div class="sidebar-card sidebar-header grid">
    //     <img  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" class="sidebar-img sidebar-hd-img"/>
    //     <span class="sidebar-title card-title">
    //       Lorem, ipsum.
    //     </span>
    //     <span class="card-subtitle sidebar-subtitle">Lorem.</span>
    //     <span class="sidebar-btn">
    //       Change
    //     </span>
    //   </div> */}
    //   <div class="suggestions-header grid">
    //     <span class="suggestions-text">
    //       Suggestions for you
    //     </span>
    //     <span class="sidebar-btn-alt">
    //       {/* See all */}
    //     </span>
    //   </div>
    //   {users.map((obj)=>{
    //    return(
    //    <div class="side bar-card sidebar-card-alt grid">
    //     <img style={{height:"40px",width:"40px"}} src="/assets/avatar.jpg" alt="" class="sidebar-img side-bar-img-alt"/>
    //     <span class="sidebar-title card-title">
    //     {obj.username}
    //     </span>
    //     <span class="sidebar-btn">
    //              {obj.followers.includes(user._id) ?<button className='followButton' onClick={(e) => { UnFollowUser(obj._id) }}>Unfollow</button>:
    //              <button className='followButton' onClick={(e) => { FollowUser(obj._id) }}>Follow</button>
    //             }
    //     </span>
    //   </div>
    //     )
    //   })}
    //   </div>
    //   </div>
    //           <div className='friendsDetails'>
    //             <h3></h3>

    //             <br/>
    //             </div>

    //   </div>
  );
}

export default Rightbar;
