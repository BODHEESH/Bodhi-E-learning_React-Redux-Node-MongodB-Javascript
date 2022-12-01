import React from 'react'
import Profile from '../../Components/Users/Profile/Profile'
import Navbar from '../../Components/Users/Navbar.js/Navbar'
import Rightbar from '../../Components/Users/Rightbar/Rightbar'
import Sidebar from '../../Components/Users/Sidebar/Sidebar'


function ProfilePage() {
  return (
    <div>
         <>
      <Navbar/>
      <div className="profile">
      <div className="profileRight">
        <Profile/>
      </div>
      </div>
    </>
    </div>
  )
}

export default ProfilePage
