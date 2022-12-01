
import {  HiOutlineLogout } from "react-icons/hi";
import { MdNotificationsNone } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { FiMessageSquare} from "react-icons/fi";
import { BiHome, BiMessageSquareAdd} from "react-icons/bi";
import { CgProfile} from "react-icons/cg";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {confirmAlert} from 'react-confirm-alert'
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/userSlice";
import { MdRssFeed } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";


function Sidebar() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    localStorage.removeItem('user')
            dispatch(logout())
            navigate('/');
  }


    const menus = [
        { name: "Home", link: "/landingpage", icon: BiHome },
        { name: "Feed", link: "/home", icon: MdRssFeed },
        // { name: "messages", link: "/chat", icon: FiMessageSquare },
        { name: "Notifications", link: "/home", icon: MdNotificationsNone },
        { name: "Upload Course", link: "/home", icon: BiMessageSquareAdd },
        { name: "Educators", link: "/home", icon: GiTeacher },
        { name: "Setting", link: "/home", icon: RiSettings4Line },
        { name: "My Profile", link: "/userProfile", icon: CgProfile ,bottom:true},
        { name: "Logout", link: "/", icon: HiOutlineLogout ,},
      ];


  return (
    <>
    <div hidden className="border shadow-md min-h-screen lg:pl-7 lg:pr-12 bg-white fixed md:block  md:w-20  lg:w-64 overflow-hidden ">
        
        <div hidden className="text-center mt-8 mb-9 lg:block flex justify-center ">
        
          {/* <img className="md:w-1/2 lg:w-1/3 inline" src="/assets/b2.webp" alt="" /> */}
            
          {/* <h2 hidden className="font-bold text-xl lg:block">LOGO</h2> */}
        </div>
        <div className=" flex flex-col gap-6 justify-start relative md:items-center lg:items-start">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.bottom && ""
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-300 rounded-md`}>
             {menu.name == 'Logout'? <div className="md:text-3xl lg:text-2xl" onClick={handleLogout}>{React.createElement(menu?.icon, )}</div> :<div className="md:text-3xl lg:text-2xl">{React.createElement(menu?.icon, )}</div> }
              <h2 
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 font-normal pr-8 hidden lg:block`}
              >
                {menu?.name}
              </h2>
             
            </Link>
          ))}
        </div>
      </div>
      
     

</>
    
  );
}

export default Sidebar

