import React from 'react'
import {Outlet} from 'react-router-dom'
import Dashboard from '../../Components/Admin/Dashboard/Dashboard'
import Users from '../../Components/Admin/User/User'
function AdminHomePage() {
  return (
    <div>
    <div className="flex">
    <Dashboard/>
    <Users/>
    </div>
    <Outlet/>
    </div>
  )
}

export default AdminHomePage
