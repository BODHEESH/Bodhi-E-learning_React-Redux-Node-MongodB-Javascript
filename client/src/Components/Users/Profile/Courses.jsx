
import React, { useEffect, useState } from 'react'
// import add from '../../asset/add.png'
import Upload from '../../../assets/add.png'
import { PermMedia, Label, EmojiEmotions, Room, Cancel } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import axios from 'axios'


function Courses() {
    const user = useSelector((state) => state.user)

    const [showModal, setShowModal] = useState(false);
    const [showMod, SetShowMod] = useState(false)
    const [videofile, setvideoFile] = useState('')
    const [coursedesc, setcourseDesc] = useState('')
    const [courseName, setcourseName] = useState('')
    const [image, setImage] = useState('')
    const [video, setVideo] = useState('')
    const [courses, setCourses] = useState([]);


    const PF = process.env.REACT_APP_PUBLIC_FOLDER;







    const submitHandler = async (e) => {
        e.preventDefault()
        const newCourse = {
            userId: user._id,
            courseName: courseName,
            desc: coursedesc,
        }


        if (videofile) {
            console.log("video upload clicked- on course upload-------------------------------");
            const data = new FormData();
            const fileName = videofile.name
            data.append("file", videofile)
            data.append("name", fileName)
            newCourse.video = fileName

            try {
                await axios.post('http://localhost:5000/course/upload', data)
                window.location.reload()

            } catch (error) {
                console.log(error);
            }
        }
        try {
            await axios.post('http://localhost:5000/course', newCourse)
            window.location.reload()

        } catch (err) {
            console.log(err);
        }

        {
            videofile && (
                <div className="shareImgContainer">
                    <video className="shareImg" src={URL.createObjectURL(videofile)} alt="" />
                    <Cancel className="shareCancelImg" onClick={() => setvideoFile(null)} />
                </div>
            )
        }
    }


    const onVideoInputChange = (e) => {

        setVideo(URL.createObjectURL(e.target.files[0]));
        setvideoFile(e.target.files[0])
        // console.log("video file clicked");
    }



    const modalshow = (e) => {
        e.preventDefault()
        setShowModal(true)
    }


    useEffect(() => {
        const fetchCourse = async () => {
            const res = await axios.get(`http://localhost:5000/course/${user._id}`
                //   ,{headers:{"x-access-token":localStorage.getItem('usertoken')}}
            )
            console.log(res, "get courses in courses-------------------");
            setCourses(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt)
                })
            )
        }
        fetchCourse();
    }, [])

    return (

        <div>
            {/* start course */}
            <section class="py-20">
                <h1 class="mb-12 text-center font-sans text-5xl font-bold">Launched Courses</h1>
                <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">

                    {courses.map((obj) => {
                        return (

                            <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                                <a href="/test" class="block h-full w-full">
                                   

                                    <div className="postCenter">
                                        
                                        <img className="postImg max-h-40 w-full object-cover" src={PF + obj.img} alt="" />
                                        {obj?.video.length !== 0 && <video className="postImg  w-full object-cover" controls src={PF + obj.video} />}
                                    </div>

                                    {/* <img class="max-h-40 w-full object-cover" alt="featured image" src="https://www.filepicker.io/api/file/4M8w50NiQeuN7DBHRYEm" /> */}
                                    <div class="w-full bg-white p-4">
                                        <p class="text-md font-medium text-indigo-500">{obj.courseName}</p>
                                        <p class="mb-2 text-xl font-medium text-gray-800">{(obj.desc).substring(0, 100)}...</p>
                                        <div class="justify-center mt-4 flex flex-wrap items-center">
                                            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a href="/courseview"> Open</a></div>
                                            <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        )

                    })}

                    {/* <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                        <a href="#" class="block h-full w-full">
                            <img class="max-h-40 w-full object-cover" alt="featured image" src="https://cdn-images-1.medium.com/max/2000/1*6ahbWjp_g9hqhaTDSJOL1Q.png" />
                            <div class="w-full bg-white p-4">
                                <p class="text-md font-medium text-indigo-500">Course 2</p>
                                <p class="mb-2 text-xl font-medium text-gray-800">The Complete JavaScript Course 2023: From Zero to Expert!</p>
                                <div class="justify-center mt-4 flex flex-wrap items-center">
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a href="/courseview">Open</a></div>
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                        <a href="#" class="block h-full w-full">
                            <img class="max-h-40 w-full object-cover" alt="featured image" src="https://www.filepicker.io/api/file/4M8w50NiQeuN7DBHRYEm" />
                            <div class="w-full bg-white p-4">
                                <p class="text-md font-medium text-indigo-500">Course 1</p>
                                <p class="mb-2 text-xl font-medium text-gray-800">Learn Python: The Complete Python Programming Course</p>
                                <div class="justify-center mt-4 flex flex-wrap items-center">
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a href="/courseview"> Open</a></div>
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
                                </div>
                            </div>
                        </a>
                    </article>

                    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                        <a href="#" class="block h-full w-full">
                            <img class="max-h-40 w-full object-cover" alt="featured image" src="https://cdn-images-1.medium.com/max/2000/1*6ahbWjp_g9hqhaTDSJOL1Q.png" />
                            <div class="w-full bg-white p-4">
                                <p class="text-md font-medium text-indigo-500">Course 2</p>
                                <p class="mb-2 text-xl font-medium text-gray-800">The Complete JavaScript Course 2023: From Zero to Expert!</p>
                                <div class="justify-center mt-4 flex flex-wrap items-center">
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a href="/courseview">Open</a></div>
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                        <a href="#" class="block h-full w-full">
                            <img class="max-h-40 w-full object-cover" alt="featured image" src="https://www.filepicker.io/api/file/4M8w50NiQeuN7DBHRYEm" />
                            <div class="w-full bg-white p-4">
                                <p class="text-md font-medium text-indigo-500">Course 1</p>
                                <p class="mb-2 text-xl font-medium text-gray-800">Learn Python: The Complete Python Programming Course</p>
                                <div class="justify-center mt-4 flex flex-wrap items-center">
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a href="/courseview"> Open</a></div>
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
                                </div>
                            </div>
                        </a>
                    </article>

                    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                        <a href="#" class="block h-full w-full">
                            <img class="max-h-40 w-full object-cover" alt="featured image" src="https://cdn-images-1.medium.com/max/2000/1*6ahbWjp_g9hqhaTDSJOL1Q.png" />
                            <div class="w-full bg-white p-4">
                                <p class="text-md font-medium text-indigo-500">Course 2</p>
                                <p class="mb-2 text-xl font-medium text-gray-800">The Complete JavaScript Course 2023: From Zero to Expert!</p>
                                <div class="justify-center mt-4 flex flex-wrap items-center">
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"><a href="/courseview">Open</a></div>
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div>
                                </div>
                            </div>
                        </a>
                    </article> */}

                    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                        <a href="" class="block h-full w-full">
                            <img class="max-h-40 w-full object-contain" alt="featured image" src={Upload} />
                            <div class="w-full bg-white p-4">
                                {/* <p class="text-md font-medium text-indigo-500">Add new Course</p> */}
                                <p class="mb-2 text-xl font-medium text-gray-800">ADD NEW COURSE</p>
                                {/* <p class="text-md font-light text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p> */}
                                <div class="justify-center mt-4 flex flex-wrap items-center">
                                    <div onClick={(e) => { modalshow(e) }} class="cursor-pointer mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600 align-bottom">Begin</div>
                                    {/* <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">Enroll</div> */}
                                </div>
                            </div>
                        </a>
                    </article>



                </div>
            </section>
            {/* end course */}

            {/* modal begins */}
            {showModal ? (
                <>
                    < div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <form onSubmit={submitHandler}>
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">Edit your details</h3>
                                        {/* <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => SetShowMod(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button> */}
                                    </div>
                                    <div className="relative p-6 flex-auto">

                                        <input
                                            className='w-96'
                                            type="courseName"
                                            placeholder="Enter The Course Name"
                                            onChange={(e) => { setcourseName(e.target.value) }}
                                        />
                                        {/* <input className='ml-5'
                          type="file"

                        /> */}
                                        {/* <span className='text-sm'>Update your profile pic</span> */}
                                        <br /> <br />
                                        <textarea
                                            className='w-96'
                                            type="text"
                                            name="desc"
                                            placeholder="Enter the Description"
                                            onChange={(e) => { setcourseDesc(e.target.value) }} multiple
                                        />

                                        <br /> <br />
                                        <input className='ml-5'
                                            type='file' name='videofile' id='videofile' multiple onChange={onVideoInputChange}

                                        />
                                    </div>

                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}

                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type='submit'
                                        //   onClick={handleEdit}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {/* modal ends */}
        </div>
    )
}

export default Courses