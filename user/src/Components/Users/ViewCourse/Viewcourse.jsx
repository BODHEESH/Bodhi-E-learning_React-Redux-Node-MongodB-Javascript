import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar.js/Navbar'
import { useParams } from "react-router";
import axios from 'axios';
import { useSelector } from 'react-redux';

function Viewcourse() {

    const user = useSelector((state) => state.user)
    const [course, setCourse] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const courseId = useParams()._id;
    
    useEffect(() => {
       
        const fetchCourse = async () => {
            const res = await axios.get(`http://localhost:5000/course/getSingleCourse/${courseId}`)
                // {headers:{"x-access-token":localStorage.getItem('usertoken')}}
            
    
            console.log(res, "get courses in courses----------$$$$$$$$$$$$$$$$$$$$$$$---------");
            setCourse(res.data)
        }

        fetchCourse()
    },[])





    console.log(course, "course check in bottom--====-");

    return (
        <div>
            <Navbar />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Chapter 1
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative"> </span>
                        </span>{' '}
                        {course.courseName}
                    </h2>

                </div>
                <div className="mx-auto lg:max-w-2xl">
                    <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                        {/* <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/167121800/original/91edbdbc9875196cc50f56337f4e1aea00534b12/your-awesome-mern-stack-developer.jpg"
                            alt=""
                        /> */}
                        <video className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96" width="" height="" controls src={PF + course.video}>

                        </video>

                        {/* {course[0]?.video && <video controls src={PF + course[0].video} />} */}
                        <a
                            href="#"
                            aria-label="Play Video"
                            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                        >
                            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                                <svg
                                    className="w-10 text-gray-900"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                <p className="text-base text-gray-700 md:text-lg">
                    {course.desc}


                   
                </p>





                {/* start course */}
                <section class="py-20">
                    <h1 class="mb-12 text-center font-sans text-5xl font-bold">Best Course in the Internet</h1>
                    <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">

                        <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                            <a href="#" class="block h-full w-full">
                                <img class="max-h-40 w-full object-cover" alt="featured image" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/167121800/original/91edbdbc9875196cc50f56337f4e1aea00534b12/your-awesome-mern-stack-developer.jpg" />
                                <div class="w-full bg-white p-4">
                                    <p class="text-md font-medium text-indigo-500">Chapter 1</p>
                                    <p class="mb-2 text-xl font-medium text-gray-800">MERN Stack Developer
                                        Free Course

                                        Please login to enroll in the course.

                                    </p>
                                    {/* <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p> */}
                                    <div class="justify-center mt-4 flex flex-wrap items-center">
                                        {/* <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a> Open</a></div> */}
                                        <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
                                    </div>
                                </div>
                            </a>
                        </article>

                        <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                            <a href="#" class="block h-full w-full">
                                <img class="max-h-40 w-full object-cover" alt="featured image" src="https://i.ytimg.com/vi/mrHNSanmqQ4/maxresdefault.jpg" />
                                <div class="w-full bg-white p-4">
                                    <p class="text-md font-medium text-indigo-500">Chapter 2</p>
                                    <p class="mb-2 text-xl font-medium text-gray-800">The Complete JavaScript Course 2023: From Zero to Expert!</p>
                                    {/* <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p> */}
                                    <div class="justify-center mt-4 flex flex-wrap items-center">
                                        {/* <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a>Open</a></div> */}
                                        <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                            <a href="#" class="block h-full w-full">
                                <img class="max-h-40 w-full object-cover" alt="featured image" src="https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg" />
                                <div class="w-full bg-white p-4">
                                    <p class="text-md font-medium text-indigo-500">Course 2</p>
                                    <p class="mb-2 text-xl font-medium text-gray-800">The Complete JavaScript Course 2023: From Zero to Expert!</p>
                                    {/* <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p> */}
                                    <div class="justify-center mt-4 flex flex-wrap items-center">
                                        {/* <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a>Open</a></div> */}
                                        <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                            <a href="#" class="block h-full w-full">
                                <img class="max-h-40 w-full object-cover" alt="featured image" src="https://i.ytimg.com/vi/mrHNSanmqQ4/maxresdefault.jpg" />
                                <div class="w-full bg-white p-4">
                                    <p class="text-md font-medium text-indigo-500">Chapter 3</p>
                                    <p class="mb-2 text-xl font-medium text-gray-800">The Complete JavaScript Course 2023: From Zero to Expert!</p>
                                    {/* <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p> */}
                                    <div class="justify-center mt-4 flex flex-wrap items-center">
                                        {/* <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a>Open</a></div> */}
                                        <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                            <a href="#" class="block h-full w-full">
                                <img class="max-h-40 w-full object-cover" alt="featured image" src="https://i.ytimg.com/vi/mrHNSanmqQ4/maxresdefault.jpg" />
                                <div class="w-full bg-white p-4">
                                    <p class="text-md font-medium text-indigo-500">Chapter 4</p>
                                    <p class="mb-2 text-xl font-medium text-gray-800">The Complete JavaScript Course 2023: From Zero to Expert!</p>
                                    {/* <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p> */}
                                    <div class="justify-center mt-4 flex flex-wrap items-center">
                                        {/* <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a>Open</a></div> */}
                                        <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                            <a href="#" class="block h-full w-full">
                                <img class="max-h-40 w-full object-cover" alt="featured image" src="https://i.ytimg.com/vi/mrHNSanmqQ4/maxresdefault.jpg" />
                                <div class="w-full bg-white p-4">
                                    <p class="text-md font-medium text-indigo-500">Chapter 4</p>
                                    <p class="mb-2 text-xl font-medium text-gray-800">The Complete JavaScript Course 2023: From Zero to Expert!</p>
                                    {/* <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p> */}
                                    <div class="justify-center mt-4 flex flex-wrap items-center">
                                        {/* <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a>Open</a></div> */}
                                        <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
                                    </div>
                                </div>
                            </a>
                        </article>



                    </div>
                </section>
                {/* end course */}
            </div>
        </div>
    )
}

export default Viewcourse
