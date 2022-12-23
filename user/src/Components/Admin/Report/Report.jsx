import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'





function Report() {

    const PF=process.env.REACT_APP_PUBLIC_FOLDER
    const [report,setReport]=useState([])
    useEffect(()=>{
        const fetchReports=(async()=>{
           await axios.get('/admin/allReports').then((response)=>{
            setReport(response.data)
           })
        })
        fetchReports()
    },[])

    
    const blockPost=async(id)=>{
        const res= await axios.get(`http://localhost:5000/post/blockPost/${id}`)
        console.log(res,"loggig response in report page999999999999999");
        if(res){
            alert('post blocked sucessfully')
        } 
    }


  return (
    <div>
         <div>
    <h1 className='text-2xl text-blue-800 p-4 font-extrabold '>Report Management</h1>
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
                            REPORT-ID
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          POST
                        </th>
                        {/* <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          USER_ID
                        </th> */}
                         <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            DESC
                        </th>
                        {/* <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            STATUS
                        </th> */}
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            ACTION
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        report.map((obj,index)=>{
                            obj.date=moment(obj.createdAt).format('  DD-MM-YYYY');
                            return (
                  <tr>
                    <td className="text-center">{index +1}</td>
                    <td className="text-center">{obj._id}:</td>
                    {/* <td className="text-center"><img src={PF+obj.postId.img} height="40px" width="40px"></img></td> */}
                    <td className="text-center">{obj.postId}:</td>
                    <td className="text-center">{obj.Content}</td>
                    {/* <td className="text-center">{obj.reportedStatus}</td> */}
                    <td className="text-center p-6 ">    
                    <button type="button" class="  inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                   onClick={(e) => { blockPost(obj.postId) }}>Block Post</button>
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
    </div>
  )
}

export default Report