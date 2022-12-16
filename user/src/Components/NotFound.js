import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function NotFound({error}) {
  const user=useSelector(state=>state.user)
  return (
    
  <div>
    <h1 className='text-3xl text-bold text-red-400 text-center p-3'>Oops</h1>
    <div className=' flex justify-center items-center object-center'>
    <img src='/assets/error3.jpg' className='items-center'></img>
    </div>
    <h1 className='text-3xl text-bold text-gray-400 text-center p-3'>Something Went Wrong!!!!!!</h1>
    <h3 className='text-3xl text-bold text-red-400 text-center p-3'>{error.message}</h3>
    <div className='flex items-center justify-center '>
      {user.username ?  
      <Link to='/home'>
    <button
    className="text-center text-red-500 background-transparent bg-gray-100 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button" >
                Take me back
              </button>
              </Link>        
       :
      <Link to='/admin-login'>
      <button
      className="text-center text-red-500 background-transparent bg-gray-100 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button" >
                  Take me back
                </button>
                </Link>        
    }
        
    </div>
  
  </div>
  )
}

export default NotFound