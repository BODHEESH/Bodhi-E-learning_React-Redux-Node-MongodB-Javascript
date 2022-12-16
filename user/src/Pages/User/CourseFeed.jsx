import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CourseList from '../../Components/Users/CourseList/CourseList'
import Navbar from '../../Components/Users/Navbar.js/Navbar'
import Rightbar from '../../Components/Users/Rightbar/Rightbar'
import Roundedstory from '../../Components/Users/Roundstory/Roundedstory'
import Sidebar from '../../Components/Users/Sidebar/Sidebar'

function CourseFeed() {

  // const [courses, setCourses] = useState([])



     
  // useEffect(() => {
  //     const fetchCourse = async () => {
  //         const res = await axios.get(`http://localhost:5000/course/getAllCourses`
  //             //   ,{headers:{"x-access-token":localStorage.getItem('usertoken')}}
  //         )
  //         console.log(res, "get all courses in courses^^^^^^^^^^^");
  //         setCourses(
  //             res.data.sort((p1, p2) => {
  //                 return new Date(p2.createdAt) - new Date(p1.createdAt)
  //             })
  //         )
  //     }
  //     fetchCourse();
  // }, [])

  return (
    <div>
      <Navbar />
      <div className='mt-10 '>
        <div className='flex h-screen w-full justify-between  '>
          <div hidden className=' md:block md:w-1/4 lg:w-3/12 md:m-2 lg:m-6'>

            <Sidebar />
          </div>
          <div className='scrollClass md:w-3/4 lg:w-9/12 w-full mt-4'>
            <CourseList />            
          </div>
          {/* <div className='scrollClass md:w-3/4 lg:w-9/12 w-full md:m-3 lg:m-9  mt-10'>
            <Roundedstory />
          </div> */}
          {/* <div hidden className=' lg:block md:w-1/4 lg:w-3/12 md:m-2 lg:m-6'>

            <Rightbar />
          </div> */}

        </div>

      </div>

    </div>
  )
}

export default CourseFeed