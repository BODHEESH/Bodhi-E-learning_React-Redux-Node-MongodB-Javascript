import axios from 'axios'
import moment from 'moment'
import React, { useReducer } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Swal from 'sweetalert2'

function Users() {

    const [users,SetUsers]=useState('')
    const [forms, setForms]=useState([])
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);


    

useEffect(()=>{
    axios.get("http://localhost:5000/admin/users").then((response)=>{
        if(response.data){
          SetUsers(response.data)
          setForms(response.data)

        }
        else{
            console.log("erorr");
        }
    })
},[reducerValue])


    const  blockUser = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Block this user!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, block the user!'
          }).then((result) => {
            axios.post('http://localhost:5000/admin/blockUsers/'+id).then((result) => {
            if (result.status == 200) {
                console.log(result);
                forceUpdate()
            } else {
                console.log('Something went wrong')
            }
        }).catch((err) => {
            console.log(err)
    
        })
            if (result.isConfirmed) {
              Swal.fire(
                'Blocked!',
                'Your user has been blocked.',
                'success'
              )
            }
          })
        
    }
    const  UnblockUser = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, unblock!'
          }).then((result) => {
            axios.post('http://localhost:5000/admin/UnblockUsers/'+id).then((result) => {
                if (result.status == 200) {
                    console.log(result);
                    forceUpdate()
    
                } else {
                    console.log('Something went wrong')
                }
            }).catch((err) => {
                console.log(err)
        
            })
            if (result.isConfirmed) {
              Swal.fire(
                'Unblocked!',
                'User is unblocked',
                'success'
              )
            }
          })
    }

  return (
    <div>
        <h1 className='text-2xl text-green-500 p-4 font-extrabold '>...User Management</h1>
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
                                USER-ID
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                USERNAME
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                EMAIL
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                STATUS
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                JOIN-DATE
                            </th>
                            <th
                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            forms.map((obj,index)=>{
                                obj.date=moment(obj.date).format(' h:mm:ss a DD-MM-YYYY');
                                return (

                    
               
                      
                      <tr>
                        <td className="text-center">{index +1}</td>
                        <td className="text-center">{obj._id}</td>
                        <td className="text-center">{obj.username}</td>
                        <td className="text-center">{obj.email}</td>
                        {obj.status =="active" ? 
                        <td className="text-center text-green-500 ">{obj.status}</td> :
                        <td className="text-center text-red-500 ">{obj.status}</td> }
                        <td className="text-center">{obj.date}</td>

                        <td className="text-center p-6 ">
                            {
                                obj.status =="active"?
                            
                        <button type="button" class="  inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"  onClick={(e) => { blockUser(obj._id) }}>BLOCK</button>:
                        <button type="button" class="  inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-200 hover:shadow-lg focus:bg-purple-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-200 active:shadow-lg transition duration-150 ease-in-out"  onClick={(e) => { UnblockUser(obj._id) }}>UNBLOCK</button>
                            }
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

export default Users