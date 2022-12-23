import { useState,useContext} from "react";
import {useNavigate,Link, Navigate} from 'react-router-dom'
import Swal from "sweetalert2";
import bodhiLenear from "../../../assets/bodhiLenear.png";
// import bodhiwhite from "../../../assets/logoWhite.jpg";
import bodhiwhite from "../../../assets/logoBlueTransparent.png";
import { FiCodesandbox } from "react-icons/fi";




const Dashboard = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(true);
    const Menus = [
    { dashboard: "Dashboard", src: "Chart_fill" },
    { post: "Posts", src: "Chat" },
    { reject: "Rejected List", src: "User" },
    { slot: "Booking Slots ", src: "Calendar" },
    // { create: "Create Slots ", src: "Calendar" },
    // { progress: "Progress Status", src: "Search" },
  ];

  const handleLogout=()=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout!'
      }).then((result) => {
        console.log('admin logouted');
        navigate('/admin-login');
        if (result.isConfirmed) {
          Swal.fire(
            'Logout!',
            'Logoutted successfully',
            'success'
          )
        }
      })
  }
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-green-200 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={bodhiwhite}
          className={`absolute cursor-pointer -right-6 top-9 w-12 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-270"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img 
            src={bodhiLenear}
            className={`cursor-pointer duration-500 h-10 ${
              open && "rotate-[360deg] img"
            }`}
          />
          
          <h1
            className={`text-blue-900 origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
          
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-blue-900 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
              {/* <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{height:'10px',width:'10px'}}/> */}
              <FiCodesandbox />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
                <Link to='/admin-users'>{Menu.dashboard}</Link>
                 <Link to='/admin-posts'>{Menu.post}</Link>
                 <Link to='/admin-reports'>{Menu.reject}</Link>
                <Link to='/admin-courses'>{Menu.course}</Link>
                {/* <Link to='/progress'>{Menu.progress}</Link>
                <Link to='/create'>{Menu.create}</Link> */}

              </span>

            </li>

          ))}
        </ul>
        <div className="p-8">
        <button  onClick={handleLogout} type="button" class="inline-block px-6 py-2.5 bg-green-400 text-white font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Log Out</button>

        </div>
      </div>

    </div>
  );
};
export default Dashboard;