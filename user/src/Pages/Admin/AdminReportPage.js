import React from 'react'
import {Outlet} from 'react-router-dom'
import Dashboard from '../../Components/Admin/Dashboard/Dashboard'
import Report from '../../Components/Admin/Report/Report'
function AdminReportPage() {
  return (
    <div>
    <div className="flex">
    <Dashboard/>
    <Report/>
    </div>
    <Outlet/>
    </div>
  )
}

export default AdminReportPage