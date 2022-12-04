import React from 'react'
import { useSelector } from 'react-redux'
import Feed from '../../Components/Users/Feed/Feed'
import Navbar from '../../Components/Users/Navbar.js/Navbar'
import Rightbar from '../../Components/Users/Rightbar/Rightbar'
import Roundedstory from '../../Components/Users/Roundstory/Roundedstory'
import Sidebar from '../../Components/Users/Sidebar/Sidebar'
import Stories from '../../Components/Users/Stories/Stories'
import './Home.css'

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className='mt-10 '>
        <div className='flex h-screen w-full justify-between  '>
          <div hidden className=' md:block md:w-1/4 lg:w-3/12 md:m-2 lg:m-6'>

            <Sidebar />
          </div>
          <div className='scrollClass md:w-3/4 lg:w-6/12 w-full md:m-2 lg:m-6 mt-10'>
            <Roundedstory />
            {/* <Stories className='mt-10'/> */}
            <Feed />
          </div>
          <div hidden className=' lg:block md:w-1/4 lg:w-3/12 md:m-2 lg:m-6'>

            <Rightbar />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Homepage
