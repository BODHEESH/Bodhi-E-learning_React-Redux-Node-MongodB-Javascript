import './Share.css'
import { PermMedia, Label, EmojiEmotions, Room, Cancel } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import imageFile from "../../../assets/img.png";
import videoFile from "../../../assets/4.png";


function Share() {
  const user = useSelector((state) => state.user)
  const [file, setFile] = useState('')
  const [videofile, setvideoFile] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')
  const [previewImage,setPerviewImage]=useState('')
  const [previewVideo,setPreviewVideo]=useState('')
  const [previewUrl,setPreviewUrl] =useState('')
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc,
    }
 
    if (file) {
      console.log("image upload clicked");
      const data = new FormData();
      const fileName = file.name
      data.append("file", file)
      data.append("name", fileName)
      newPost.img = fileName

      try {
        await axios.post('http://localhost:5000/post/upload', data)
        window.location.reload()

      } catch (error) {
        console.log(error);
      }
    }
    if (videofile) {
      console.log("video upload clicked--------------------------------");
      const data = new FormData();
      const fileName = videofile.name
      data.append("file", videofile)
      data.append("name", fileName)
      newPost.video = fileName

      try {
        await axios.post('http://localhost:5000/post/upload', data)
        window.location.reload()

      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post('http://localhost:5000/post', newPost)
    } catch (err) {
      console.log(err);
    }
    {
      file && (
        <div className="shareImgContainer">
          <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
          <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
        </div>
      )
    }
    {
      videofile && (
        <div className="shareImgContainer">
          <video className="shareImg" src={URL.createObjectURL(videofile)} alt="" />
          <Cancel className="shareCancelImg" onClick={() => setvideoFile(null)} />
        </div>
      )
    }
  }

  const onImageInputChange = (e) => {

    setImage(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0])
    setPerviewImage(e.target.files[0]);
    console.log(file);
  }
  const onVideoInputChange = (e) => {

    setVideo(URL.createObjectURL(e.target.files[0]));
    setvideoFile(e.target.files[0])
    setPreviewVideo(e.target.files[0])
    // console.log("video file clicked");
  }



  useEffect(() => {
    if (previewImage) {
      setPreviewUrl(URL.createObjectURL(previewImage));
      setPreviewVideo('');
    }
  }, [previewImage]);
  useEffect(() => {
    if (previewVideo) {
      setPreviewUrl(URL.createObjectURL(previewVideo));
      setPerviewImage('');
    }
  }, [previewVideo]);


  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className="shareTop flex">
          <img src={user.profilePicture ? user.profilePicture : 'https://i.stack.imgur.com/34AD2.jpg'} className='shareProfileImg' alt=""></img>
          <textarea className="shareInput" placeholder={"What's in your mind " + user.username + "?"} onChange={(e) => { setDesc(e.target.value) }} multiple></textarea>

        </div>
        <hr className='shareHr' />
        {/* <img src={image} classname="w-20 h-20 " alt="" />
        <video src={video} classname="w-20 h-20 " alt=""  controls /> */}
              {previewImage &&<div className='flex justify-center border-collapse m-10'><img className='w-25 h-20' src="" alt="" /> <img className='w-96 h-80' src={previewUrl} alt="" /></div>}
     {previewVideo &&<div className='flex justify-center border-collapse m-10'><img className='w-25 h-20' src="" alt="" /><video className='w-96 h-80' controls src={previewUrl} type="video/mp4"></video></div> }



        <form className='shareBottom' onSubmit={submitHandler}>
          <div className="shareOptions">
            <label for='file' className="shareOptions">
              <div className="item">
                <img src={imageFile} alt="" className='h-6' />
                <span className='shareOptionText'>Add image</span>
                {/* <img src={videoFile} alt="" className='h-6 pl-5' />
                <span className='shareOptionText'>Add Video</span> */}

              </div>


              <input style={{ display: "none" }} type='file' name='file' id='file' multiple onChange={onImageInputChange} />


            </label>


         
            <label for='videofile' className="shareOptions">
              <div className="item">
                {/* <img src={imageFile} alt="" className='h-6' />
                <span className='shareOptionText'>Add image</span> */}
                <img src={videoFile} alt="" className='h-6 pl-5' />
                <span className='shareOptionText'>Add Video</span>

              </div>


              <input style={{ display: "none" }} type='file' name='videofile' id='videofile' multiple onChange={onVideoInputChange} />


            </label>

          </div>





          <button className='shareButton' type='submit'>Share</button>

        </form>
      </div>

    </div>
  )
}

export default Share