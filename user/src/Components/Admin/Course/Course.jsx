import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'


function Post() {

    const [post,setPost]=useState([])
    const [comment,setComment]=useState([])
    const [report,setReport]=useState([])


    useEffect(()=>{
        const fetchPost=(async()=>{
            const res= await axios.get('/admin/allPosts')
            setPost(res.data)
        })
        fetchPost()
        const fetchComment=(async()=>{
            const comments=await axios.get('/admin/allComments')
            setComment(comments.data)
        })
        fetchComment()
        const fetchReports=(async()=>{
            const reports=await axios.get('/admin/allReports')
            setReport(reports.data)
        })
        fetchReports()
    },[])

  return (
    <div>
    <h1 className='text-2xl text-green-600 p-4 font-extrabold '>...Post Management</h1>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden p-4">
            <table class="min-w-full leading-normal ">
                <thead>
                    <tr>
                        <th
                            class="px-5  py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            SL NO:
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            POST-ID
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                           LIKES
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            COMMENTS
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            REPORTS
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            POSTED_DATE
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            ACTION
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        post.map((obj,index)=>{
                            obj.date=moment(obj.createdAt).format('  DD-MM-YYYY');
                            return (
                  <tr>
                    <td className="text-center">{index +1}</td>
                    <td className="text-center">{obj._id}</td>
                    <td className="text-center">{obj?.likes?.length}</td>
                    <td className="text-center">{comment.length}</td>
                    <td className="text-center">{report.length}</td>
                    <td className="text-center">{obj.date}</td>
                    <td className="text-center p-6 ">    
                    <button type="button" class="  inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" >DELETE</button>
                    </td>              
                    </tr>
                                )
                            })
                        }
                
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default Post
