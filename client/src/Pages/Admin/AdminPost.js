import React from 'react'
import {Outlet} from 'react-router-dom'
import Dashboard from '../../Components/Admin/Dashboard/Dashboard'
import Post from '../../Components/Admin/Post/Post'
function AdminPostPage() {
  return (
    <div>
    <div className="flex">
    <Dashboard/>
    <Post/>
    </div>
    <Outlet/>
    </div>
  )
}

export default AdminPostPage