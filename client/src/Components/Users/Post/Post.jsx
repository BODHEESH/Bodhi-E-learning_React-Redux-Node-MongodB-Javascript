import  './Post.css'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import {BookmarkBorder, MoreVert,Send,FavoriteBorder,Comment, FavoriteOutlined, DeleteOutline} from '@mui/icons-material'
import {format}  from 'timeago.js'
import {useState,useEffect, useContext} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Comments from '../Comments/Comments';
import Swal from 'sweetalert2'



function Post({post}) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const currentUser= useSelector((state)=>state.user)
  const [drop,setDrop]=useState(false)
  const [showModal,setShowModal]=useState(false)
  const [report, setReport] = useState({
    Content: "",
  });

  const handleChange = (e) => {
    console.log("handlechange ann");
    const { name, value } = e.target;
    setReport({
      ...report,
      [name]: value,
    });
    console.log(report);
    console.log(e.target.value, "drtfgyhsdfghjkj");
  };  

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);
  const likeHandler = () => {
    try {
      axios.put(`/post/like/${post._id} `,{ userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };


  const deletePost=async()=>{
    const res= await axios.delete(`http://localhost:5000/post/${post._id}`,{ userId: currentUser._id })
    window.location.reload()
    alert('post deleted successfully')
  }


  const reportPost=async()=>{
    setShowModal(true)
     const res=await axios.post(`http://localhost:5000/post/report/${post._id}`,{postId:post._id,userId:user._id,
    ...report})
    if(res){
      // Swal.fire({
      //   title: 'Post is reported',
      //   showClass: {
      //     popup: 'animate__animated animate__fadeInDown'
      //   },
      //   hideClass: {
      //     popup: 'animate__animated animate__fadeOutUp'
      //   }
      // })
    }
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    :  "https://i.stack.imgur.com/34AD2.jpg"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
    <>
     <div class="flex justify-center">
     <div class="relative inline-block">
     
        <button class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-100 focus:border-radious-20 ">
            <span class="mx-1"><MoreVert onClick={()=>setDrop(!drop)}/></span>
        </button>

        {drop?
        <div class="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">

        <hr class="border-gray-200 dark:border-gray-700 "/>
        {post.userId===currentUser._id?
         <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
         onClick={deletePost}>
         Delete
       </a>:
          <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            value={showModal}  onClick={() => setShowModal(true)} >
          Report
            </a>
        }
        
       


        </div>:null
        }
        
    </div>
     </div>
    </>
      </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
          {post?.video.length !== 0 && <video  controls src={PF + post.video} />}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <div className='text-2xl text-slate-900' onClick={likeHandler}>{isLiked? <FavoriteOutlined style={{color:"#ed4956"}}/>:<FavoriteBorder/>}</div>
            &nbsp;&nbsp;<ChatBubbleIcon />
            &nbsp;&nbsp;<ShareIcon/>
            &nbsp;&nbsp;
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
        <div>
        <Comments post={post} />
            </div>
           </div>
           {showModal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
       
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
            <div className="flex  justify-between p-5 border-b border-solid border-slate-200 rounded-t flex-col">
              <h6 className="text-xl font-semibold">Why are you reporting this post?</h6>
              <hr/>
              <div className='flex  flex-col justify-between p-3'>
                     <div className="flex">
                       <input type="radio" className="m-2 p-2 mb-3" name="Content"  value="Violation of someone's privacy" onChange={handleChange}/>
                       <label htmlFor="">Violation of someone's privacy
                       </label>
                      </div> 
                      <div className="flex ">
                       <input type="radio" className="m-2 p-2 mb-3" name="Content"value="It's spam"  onChange={handleChange}/>
                       <label htmlFor="">It's spam
                       </label>
                      </div> 
                      <div className="flex ">
                       <input type="radio" className="m-2 p-2 mb-3" name="Content" value="False information" onChange={handleChange}/>
                       <label htmlFor="">False information
                       </label>
                      </div> 
                      <div className="flex ">
                       <input type="radio" className="m-2 p-2 mb-3" name="Content"  value="I just don't like it"  onChange={handleChange}/>
                       <label htmlFor="">I just don't like it
                       </label>
                      </div> 
                      <div className="flex ">
                       <input type="radio" className="m-2 p-2 mb-3" name="Content" value="Bullying or harassment"  onChange={handleChange}/>
                       <label htmlFor="">Bullying or harassment
                       </label>
                      </div> 
                      <div className="flex ">
                       <input type="radio" className="m-2 p-2 mb-3"value="Something else"  name="Content"/>
                       <label htmlFor="">Something else
                       </label>
                      </div> 
                      
                 
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
              </div>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
                className="text-red-500 background-transparent bg-gray-100 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={reportPost}
              >
                report post
              </button>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null}
         </div>
      );
}

export default Post