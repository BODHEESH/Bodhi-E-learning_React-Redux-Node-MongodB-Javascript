import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AllusersList({ users, refresh }) {

  const user = useSelector((state) => state.user)
  const [check, setCheck] = useState(false)

  const PF = process.env.REACT_APP_PUBLIC_FOLDER



  useEffect(() => {
    console.log("button changed");
  }, [check]);



  const FollowUser = async (id) => {
    console.log("followed user");
    try {
      const res = await axios.put(`http://localhost:5000/follow/${id}`, { userId: user._id });
      console.log(res);
      setCheck(!check);
      refresh(Date.now())
    } catch (err) {
      console.log(err);
    }
  };
  const UnFollowUser = async (id) => {
    console.log("unfollowed user");
    try {
      const res = await axios.put(`http://localhost:5000/unfollow/${id} `, { userId: user._id, });
      console.log(res);
      refresh(Date.now())
      setCheck(!check);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex flex-wrap'>

      <div class="w-64 mx-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md white:bg-gray-800 dark:border-gray-700 h-60 mt-6">

        <div class="flex flex-col items-center pb-1">
          <Link to={`/profile/${users.username}`}>
            <img class="w-20 h-20 mt-4 rounded-full shadow-lg" src={users.profilePicture ? PF + users.profilePicture : 'https://i.stack.imgur.com/34AD2.jpg'} alt="img" />
          </Link>
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-dark">{users.username}</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{users.email}</span>
          <div class="flex mt-1 space-x-3 md:mt-6">
            {users?.followers?.includes(user._id) ?
              <a href="#" class="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => { UnFollowUser(users._id) }}>Unfollow User</a> :
              <a href="#" class="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => { FollowUser(users._id) }}>Follow User</a>
            }
            <a href="/chat" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
          </div>
        </div>
      </div>



    </div>
  )
}

export default AllusersList
