import React, { useEffect } from "react";
import {
  BookmarkBorder,
  MoreVert,
  Send,
  FavoriteBorder,
  Comment,
  FavoriteOutlined,
} from "@mui/icons-material";
import { format } from "timeago.js";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import "./Comments.css";
import { Link } from "react-router-dom";

function Comments({ post }) {
  // console.log(post, "qqqqqqqqqqqqqqqqqqqqqqqqqqq");
  const [comment, setComment] = useState("");
  const [seeComments, setSeeComments] = useState([]);
  const [commentShow, setCommentShow] = useState(false);
  const currentUser = useSelector((state) => state.user);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleComment = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/post/addcomment/${post._id}`, {
      userId: currentUser._id,
      comment: comment,
      postId: post._id,
    });
    setComment("");
  };

  useEffect(() => {
    const postComments = async () => {
      const comments = await axios.get(`http://localhost:5000/post/getcomments/${post._id}`);
      setSeeComments(comments.data);
      console.log(comments.data,"comments data in commentssssssssssssssss");
    };
    postComments();
  }, [comment]);

  const handleShow = () => {
    setCommentShow(!commentShow);
  };

  // console.log(
  //   currentUser,
  //   "current user in comment-----------------------------"
  // );
  return (
    <div>
      <form className="flex items-center py-2" onSubmit={handleComment}>
        <img src={currentUser.profilePicture} alt="" />
        {/* <SentimentSatisfiedAltIcon className="h-7 mr-2" /> */}
        <Link to={`/profile/${currentUser.username}`}>
          <img
            class="w-8 h-8 rounded-full bg-gray-100"
            src="https://binaryinformatics.com/wp-content/uploads/2019/01/MERN-Stack-Development-and-Consulting-Services.jpg"
          ></img>
        </Link>
        <textarea
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border-none flex-1 focus:ring-0 outline-none flex flex-wrap"
          placeholder="Add a comment..."
        />
        <button type="submit" className="font-semibold text-blue-400 mr-2 pl-4 pr-4 shadow-md text-center">
          Post
        </button>
      </form>
      <p onClick={handleShow}>View Comments</p>
      {seeComments.map((obj) => {
        return (
          <>

              {/* {commentShow?
                <div className='commentSection'>
                <div className='commentLeft'>
                  <img src={PF+obj.userId.profilePicture} className='w-10 h-10 rounded-full bg-gray-100"'/> 
                 {obj.userId.username===currentUser.username?   <p className='font-semibold px-2 mt-1'>You</p>:
                  <p className='font-semibold px-2 mt-1'>{obj.userId.username}</p> }
                  
                   <p className='mt-1'>{obj.comment}&nbsp;</p> 
                   <p className='date'>{format(obj.createdAt)}</p>
                </div>   
              </div>:null} */}
            
            {commentShow ? (
              <div className="comment">
                <img class="w-12 h-12 rounded-full bg-gray-100"
                  src={ obj.userId.profilePicture ?  PF+obj.userId.profilePicture : 'https://i.stack.imgur.com/34AD2.jpg'} ></img>
                  {obj.userId.username===currentUser.username? 
                    <p className='font-semibold px-2 mt-1'>You</p>
                    :
                  <p className='font-semibold px-2 mt-1'>{obj.userId.username}</p> }

                <div className="info">
                  <span className="commentspan">{obj.userName}</span>
                  <p className="commentp">{obj.comment}&nbsp;</p>
                </div>
                <span className="date">{format(obj.createdAt)}</span>
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
}

export default Comments;
