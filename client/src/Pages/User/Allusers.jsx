import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Users/Navbar.js/Navbar'
import Rightbar from '../../Components/Users/Rightbar/Rightbar'
import Sidebar from '../../Components/Users/Sidebar/Sidebar'
import AllusersList from '../../Components/Users/Allusers/AllusersList'
import axios from 'axios'

function Allusers() {



    const [users, setUsers] = useState([])
    const [refresh, setRefresh] =useState('')


    useEffect(() => {
        const fetchUsers = async () => {
            const allUsers = await axios.get(`/data/getAllusers`)
            //  console.log(allUsers,"all users list");
            if (allUsers) {
                setUsers(allUsers.data)
            } else {
                console.log('error');
            }
        }
        fetchUsers()
    }, [refresh])

    console.log(users);





    return (
        <div>
            <Navbar />
            <div className='mt-10 '>
                <div className='flex h-screen w-full justify-between bg-gray-100 py-6'>
                    <div hidden className=' md:block md:w-1/4 lg:w-3/12 md:m-2 lg:m-6'>

                        <Sidebar />
                    </div>

                    <div className='flex flex-wrap w-[90%]'>
                        {users.map((u) => (
                            <AllusersList key={u.id} users={u} refresh={setRefresh} />
                        ))}
                    </div>




                </div>

            </div>
        </div>
    )
}

export default Allusers