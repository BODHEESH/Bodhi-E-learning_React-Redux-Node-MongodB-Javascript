import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import logoBodhi from "../../../assets/logoBlueTransparent.png"
import "./adminLogin.css"

export default function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate=useNavigate()

    // useEffect(() => {
    //     if(adminDetails){
    //       navigate('/admin-users')
    //     }
    //   }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!email) {
               setErrorMessage("Email is required");
           } else if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
               setErrorMessage("Enter a valid email");
           } else if (!password) {
               setErrorMessage("Password is required");
           } else if (password.length < 4) {
               setErrorMessage("Password must be atleast 4 characters");
           } else if (password.length > 20) {
               setErrorMessage("Password must be less than 20 characters");
           } else {
               const { data } = await axios.post('http://localhost:5000/admin/login', {
                   email: email,
                   password: password
               });
               if (data) {
                   if (data?.admin) {
                       navigate("/admin-users");           
                   } else {
                       setErrorMessage(data)
                   }
               }else{
                   setErrorMessage('Something went wrong')
               }
           }
       } catch (error) {
           console.log(error.message);
       }
    }
  return (
    <div  className='maindiv '>
    <div className="mb-6 ">
           <div className="flex justify-center">
               <img alt=""className="h-14 w-14"
                 src={logoBodhi}/>
           </div>
           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Hello Admin!<br/> Login to your Account
           </h2>
       </div>
       <form className='loginForm  max-w-[400px] w-full h-max mx-auto rounded-lg p-8 px-8 ' onSubmit={handleSubmit}>
               {errorMessage && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">{errorMessage}</div>}
      
               <div className='flex flex-col text-gray-400 py-2'>
                   <label className='text-gray-400 text-bold'>Email</label>
                   <input className='rounded-lg  mt-2 p-2 border border-black hover:bg-purple-50 hover:border-purple-500' type="text" value={email}  onChange={(e)=> {setEmail(e.target.value)}}/>
               </div>
               <div className='flex flex-col text-gray-400 py-2'>
                   <label className=''>Password</label>
                   <input className='p-2 rounded-lg  mt-2  border border-black hover:bg-purple-50 hover:border-purple-500' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
               </div>
               <button  className='w-full my-5 py-2 bg-purple-600 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40 text-white font-semibold rounded-lg'>Login</button>  
       </form>
   </div>
  )
}