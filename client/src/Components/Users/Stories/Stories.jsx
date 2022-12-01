// import { useContext } from "react";

import "./stories.css"
// import { AuthContext } from "../../context/authContext"

const Stories = () => {

  // const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Akshay",
      img: "https://yt3.ggpht.com/ytc/AMLnZu-cSoO0e2Shro4sYkaKYCumlgllLCTYYNf7bk7G_g=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 2,
      name: "Johns",
      img: "https://cdn.filestackcontent.com/WxB8iZz1Q6qAR66K1ejq",
    },
    {
      id: 3,
      name: "Chong lee",
      img: "https://uploads.toptal.io/profile_photo/image/user/314249/large_3e35bd3a0699ddcecdf2b6e7a3c66f04.jpg",
    },
    // {
    //   id: 4,
    //   name: "Kochunni",
    //   img: "https://static.toiimg.com/photo/91672448/91672448.jpg?v=3",
    // },
    // {
    //   id: 5,
    //   name: "Kochunni",
    //   img: "https://static.toiimg.com/photo/91672448/91672448.jpg?v=3",
    // },
    // {
    //   id: 6,
    //   name: "Kochunni",
    //   img: "https://static.toiimg.com/photo/91672448/91672448.jpg?v=3",
    // },
  
  ];

  return (
    <div className="stories">
      <div className="story">
          <img className="storyimg" src="https://global-uploads.webflow.com/5e8de3e58f3812569585bff9/630f168a3053b91c9fb603d6_Bjarte.png" alt="" />
          {/* <img src={currentUser.profilePic} alt="" /> */}
          <span className="storyspan">Sam</span>
          {/* <span>{currentUser.name}</span> */}
          <button className="storybutton">+</button>
        </div>
      {stories.map(story=>(
        <div className="storyimgdiv" key={story.id}>
          <img className="storyimg"  src={story.img} alt="" />
          <span  className="storyspan">{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories