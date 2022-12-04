import React, { useEffect, useState } from 'react'
import { BsBookmarkPlus } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { RiNumbersFill } from "react-icons/ri";


function CourseList() {
    // const [courses, setCourses] = useState([])



    
    // useEffect(() => {
    //     const fetchCourse = async () => {
    //         const res = await axios.get(`http://localhost:5000/course/`
    //             //   ,{headers:{"x-access-token":localStorage.getItem('usertoken')}}
    //         )
    //         console.log(res, "get courses in courses-------------------");
    //         setCourses(
    //             res.data.sort((p1, p2) => {
    //                 return new Date(p2.createdAt) - new Date(p1.createdAt)
    //             })
    //         )
    //     }
    //     fetchCourse();
    // }, [])






    return (
        <div className=' "mx-auto grid max-w-screen-lg grid-cols-1 gap-1 p-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-2'>

            <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 h-[450px] p-1">

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
                                <a class="font-extrabold text-3xl inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300 " href="#0"><BsBookmarkPlus /></a>
                                <a class="font-extrabold text-3xl inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300" href="#0"><BsFillBookmarkCheckFill /></a>
                                {/* <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500" href="#0">Preview</a> */}
                                <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-green-600 text-white" href="#0">Enroll Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 h-[450px] p-1">

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
            <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 h-[450px] p-1">

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
                                <a class="font-extrabold text-3xl inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300 " href="#0"><BsBookmarkPlus /></a>
                                <a class="font-extrabold text-3xl inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300" href="#0"><BsFillBookmarkCheckFill /></a>
                                {/* <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500" href="#0">Preview</a> */}
                                <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-green-600 text-white" href="#0">Enroll Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 h-[450px] p-1">

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
            <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 h-[450px] p-1">

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
                                <a class="font-extrabold text-3xl inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300 " href="#0"><BsBookmarkPlus /></a>
                                <a class="font-extrabold text-3xl inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300" href="#0"><BsFillBookmarkCheckFill /></a>
                                {/* <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500" href="#0">Preview</a> */}
                                <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-green-600 text-white" href="#0">Enroll Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 h-[450px] p-1">

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
            <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 h-[450px] p-1">

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
                                <a class="font-extrabold text-3xl inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300 " href="#0"><BsBookmarkPlus /></a>
                                <a class="font-extrabold text-3xl inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2  hover:bg-indigo-300" href="#0"><BsFillBookmarkCheckFill /></a>
                                {/* <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500" href="#0">Preview</a> */}
                                <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-green-600 text-white" href="#0">Enroll Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 h-[450px] p-1">

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
