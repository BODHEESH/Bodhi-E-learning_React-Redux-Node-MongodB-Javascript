import React from 'react'
import Coursesbookmarked from '../../Components/Users/CoursesBookmarked/Coursesbookmarked'
import Navbar from '../../Components/Users/Navbar.js/Navbar'
import Sidebar from '../../Components/Users/Sidebar/Sidebar'

function BookmarkedCourse() {
  return (
    <div>
    <Navbar />
    <div className='mt-10 '>
        <div className='flex h-screen w-full justify-between bg-gray-100 py-6'>
            <div hidden className=' md:block md:w-1/4 lg:w-3/12 md:m-2 lg:m-6'>

                <Sidebar />
            </div>

            <div className='flex flex-wrap w-[90%]'>
                {/* {users.map((u) => (
                    <AllusersList key={u.id} users={u} refresh={setRefresh} />
                ))} */}
                <Coursesbookmarked />
            </div>




        </div>

    </div>
</div>
    
  )
}

export default BookmarkedCourse