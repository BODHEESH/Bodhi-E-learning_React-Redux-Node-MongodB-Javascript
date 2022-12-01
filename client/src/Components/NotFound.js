import React from 'react'

function NotFound() {
  return (
    <div className='position-relative' style={{minHeight:'calc(100vh - 70px'}}>
      <h2 className='position-absolute text-secondary' style={{top:'50%',left:'50%',transform:'transilate(-50%,-50%'}} >
         404! 
         Page not found
      </h2>
    </div>
  )
}

export default NotFound
