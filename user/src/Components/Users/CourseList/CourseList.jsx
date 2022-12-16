import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsBookmarkPlus } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { RiNumbersFill } from "react-icons/ri";
import { useSelector } from 'react-redux'
import { HiUserGroup } from "react-icons/hi";
import { Link } from 'react-router-dom';



function CourseList() {
    const [courses, setCourses] = useState([])
    const [Button, setButton] = useState(false)

    const currentUser = useSelector((state) => state.user)

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;





    useEffect(() => {
        const username = "bvc";
        const fetchCourse = async () => {
            const res = await axios.get("http://localhost:5000/course/allcourses/list"
                //   ,{headers:{"x-access-token":localStorage.getItem('usertoken')}}
            )
            setCourses(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt)
                })
            )
        }
        fetchCourse();

    },[Button])

    const enrollhandler = (CID) => {

        try {
            const res = axios.put(`/course/enroll/${CID} `, { userId: currentUser._id });
            console.log(res, "response after course enrollment");

        } catch (error) {
            console.log(error);
        }
    }

    // const savehandler = (SID) => {
    //     try {
    //         const res = axios.put(`/course/savecourse/save/${SID} `, { userId: currentUser._id });
    //         console.log(res , "saved course in course list saved course in course page");
    //         if (res.data.status == true) {
    //             setButton(true)
    //         } else {
    //             setButton(false)
    //         }
    //         console.log(res, "response after course saving");

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const savehandler = (SID) => {
        try {
            axios.put(`/course/savecourse/save/${SID} `, { userId: currentUser._id }).then((res) =>{
                console.log(res , "saved course in course list saved course in course page");
            })
            if (res.data.status == true) {
                setButton(true)
            } else {
                setButton(false)
            }
            console.log(res, "response after course saving");

        } catch (error) {
            console.log(error);
        }
    }






    return (
        <div className=' "mx-auto grid max-w-screen-lg grid-cols-1 gap-1 p-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-2'>

            {courses.map((obj) => {
                return (

                    <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 h-[450px] p-1 mt-10">

                        <div class="max-w-xs mx-auto">
                            <div class="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                                <a class="block focus:outline-none focus-visible:ring-2" href="">
                                    <figure class="relative h-0 pb-[56.25%] overflow-hidden">
                                        <video class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={PF + obj.video} width="320" height="180" alt="Course" />
                                    </figure>
                                </a>
                                {/* <!-- Card Content --> */}
                                <div class="flex-grow flex flex-col p-5">
                                    {/* <!-- Card body --> */}
                                    <div class="flex-grow">
                                        {/* <!-- Header --> */}
                                        <header class="mb-3">
                                            <a class="block focus:outline-none focus-visible:ring-2" href="#0">
                                                <h3 class="text-[18px] text-gray-900 font-extrabold leading-snug">{(obj.courseName.substring(0, 40))}</h3>
                                            </a>
                                        </header>
                                        {/* <!-- Content --> */}
                                        <div class="mb-8">
                                            <p>{(obj.desc).substring(0, 100)}...</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card footer --> */}
                                    <div class="flex justify-between space-x-2">
                                        {

                                            obj.BookmarkedUsers.includes(currentUser._id) ?
                                                <button class="font-extrabold text-3xl inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300 " href="" onClick={() => savehandler(obj._id)}><BsFillBookmarkCheckFill /></button>
                                                :
                                                <button class="font-extrabold text-3xl inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300 " href="" onClick={() => savehandler(obj._id)}>< BsBookmarkPlus /></button>



                                        }

                                        <div className='flex-col'>
                                            <div className='flex align-middle justify-center'>
                                                {/* <a class="font-extrabold text-2xl inline-flex items-center justify-center  py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300" href="#0"><RiNumbersFill /></a> */}
                                                <a class="font-extrabold text-2xl inline-flex items-center justify-center px-2  py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300" href="#0"><HiUserGroup /></a>
                                                <span className='mt-2 text-green-500 font-extrabold'>{obj.enrollments.length}</span>
                                            </div>
                                            {/* <span>Enrollments</span> */}

                                        </div>

                                        <Link to={`/viewcourse/${obj._id}`}>
                                        {
                                            obj.enrollments.includes(currentUser._id) ?
                                                <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-red-600 text-white" href="" onClick={() => enrollhandler(obj._id)}>Disenroll</a>
                                                :
                                                <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-green-600 text-white" href="" onClick={() => enrollhandler(obj._id)}>Enroll Now</a>
                                            }
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                )

            })}


            <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 h-[450px] p-1 mt-8">

                <div class="max-w-xs mx-auto">
                    <div class="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <a class="block focus:outline-none focus-visible:ring-2" href="#0">
                            <figure class="relative h-0 pb-[56.25%] overflow-hidden">
                                <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638284256/course-img_tf0g8c.png" width="320" height="180" alt="Course" />
                            </figure>
                        </a>
                        {/* <!-- Card Content --> */}
                        <div class="flex-grow flex flex-col p-5">
                            {/* <!-- Card body --> */}
                            <div class="flex-grow">
                                {/* <!-- Header --> */}
                                <header class="mb-3">
                                    <a class="block focus:outline-none focus-visible:ring-2" href="#0">
                                        <h3 class="text-[22px] text-gray-900 font-extrabold leading-snug">The Ultimate JavaScript Course</h3>
                                    </a>
                                </header>
                                {/* <!-- Content --> */}
                                <div class="mb-8">
                                    <p>The JavaScript course for everyone! Master JavaScript with projects, challenges and theory.</p>
                                </div>
                            </div>
                            {/* <!-- Card footer --> */}
                            <div class="flex justify-between space-x-2">
                                <a class="font-extrabold text-3xl inline-flex items-center justify-center px-1.5 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300 " href="#0"><BsBookmarkPlus /></a>
                                {/* <a class="font-extrabold text-3xl inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300" href="#0"><BsFillBookmarkCheckFill /></a> */}
                                <div className='flex-col'>
                                    <div className='flex align-middle justify-center'>
                                        <a class="font-extrabold text-2xl inline-flex items-center justify-center  py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300" href="#0"><RiNumbersFill /></a>
                                        <span className='mt-2 text-green-500 font-extrabold'>954</span>
                                    </div>
                                    {/* <span>Enrollments</span> */}

                                </div>
                                {/* <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500" href="#0">Preview</a> */}
                                <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-green-600 text-white" href="#0">Enroll Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            












        </div>





    )
}

export default CourseList
