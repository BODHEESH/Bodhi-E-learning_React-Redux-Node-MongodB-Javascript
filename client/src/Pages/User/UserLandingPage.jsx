import React from "react";
import { Link } from "react-router-dom";


import logoBlueTransparent from "../../assets/logoBlueTransparent.png";
import bodhiLearning from "../../assets/bodhiLearning.png";
import bodhi2a from "../../assets/bodhi2a.png";
import bodhi2 from "../../assets/bodhi2.png";
import bodhi3 from "../../assets/bodhi3.png";
import bodhi4 from "../../assets/bodhi4.webp";
import PeopleIcon from "@mui/icons-material/People";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";

function UserLandingPage() {
  return (
    <div>
      <div className="flex justify-between">
        <div className=" text-purple-600">
        <Link to="/home">
          <img className="w-36 h-36 m-5" src={logoBlueTransparent} alt="" />
        </Link>
        </div>
        {/* <img src={Groups} alt="" /> */}
        {/* <div> <img className="w-36 h-36 m-5" src={Groups} alt="" /></div> */}
        <div>
          {/* <MenuBookIcon className=" mt-14 m-16 text-blue-800" />
          <Diversity3Icon className=" mt-14 m-16  text-blue-800" /> */}
          <Link to="/">
          <MenuBookIcon className=" mt-14 m-16 text-blue-800" />
          <Diversity3Icon className=" mt-14 m-16  text-blue-800" />
          <DynamicFeedIcon className=" mt-14 m-16  text-blue-800" />
          </Link>
        </div>

        <div>
          {/* <img className="w-36 h-36 m-5" src={logoBlueTransparent} alt="" /> */}
          <Link to="/">
            <button className="bg-blue-700 text-white rounded p-4 m-3 mt-14">
              LOGIN HERE
            </button>
          </Link>
          {/* <Link to="/register">
          <button className="bg-blue-700 text-white rounded p-4 m-3 mt-14">
              REGISTER
            </button>
          </Link> */}
        </div>
      </div>
      <div>
        <img src={bodhiLearning} alt="" />
      </div>

      <div className="flex">
        <div className="w-3/4 text-center m-auto">
          <div className="text-6xl text-blue-900 font-bold m-3">DONT</div>
          <div>
            <p className="text-3xl m-3">
              BODHI -TUTION CENTER HELPS <br /> YOUR KID WITH ONE-TO-ONE
              ATTENTION
            </p>
          </div>
          <button className="bg-blue-900 text-white rounded p-2 m-3">
            CLICK ME
          </button>
        </div>
        <div className="w-1/2 m-auto">
          <img src={bodhi2} alt="" />
        </div>
      </div>

      {/* <div>
        <img src={bodhi3} alt="" />
      </div> */}

      <div className="flex">
        <div className=" pl-52 m-auto">
          {" "}
          <img src={bodhi3} alt="" />
        </div>

        <div className="w-3/4 text-center m-auto">
          <div className="text-6xl text-blue-900 font-bold m-3">B T C</div>
          <div>
            <p className="text-3xl m-3">
              BODHI -TUTION CENTER HELPS <br /> YOUR KID WITH ONE-TO-ONE
              ATTENTION
            </p>
          </div>
          <button className="bg-blue-900 text-white rounded p-2 m-3">
            CLICK ME
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="w-3/4 text-center m-auto">
          <div className="text-6xl text-blue-900 font-bold m-3">SHARE</div>
          <div>
            <p className="text-3xl m-3">
              YOUR KNOWLEGDGE FOR THE WORLD <br /> TO LEARN
            </p>
          </div>
          <Link to="/home">
          <button className="bg-blue-900 text-white rounded p-2 m-3">
            POST NOW
          </button>
          </Link>
        </div>
        <div>
          {" "}
          <img src={bodhi4} alt="" />
        </div>
      </div>

      {/* 
        <div className='flex'>
             <div>  <img src={bodhi4} alt="" /></div>
       
             <div className='w-3/4 text-center m-auto'>
               <div className='text-6xl text-blue-900 font-bold m-3'>SHARE</div>
               <div><p className='text-3xl m-3'>YOUR KNOWLEGDGE FOR THE WORLD <br/> TO LEARN</p></div>
               <button className='bg-blue-900 text-white rounded p-2 m-3'>POST NOW</button>
           </div>
        </div> */}

      {/* <div>
        <img src={bodhi4} alt="" />
      </div> */}

      <div className="w-auto bg-slate-300">
        <img className="w-36 h-36 " src={logoBlueTransparent} alt="" />
      </div>
    </div>
  );
}

export default UserLandingPage;
