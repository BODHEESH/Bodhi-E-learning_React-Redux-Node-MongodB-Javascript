const express=require('express')
const Users=require('../models/userModel')
const Post=require('../models/postSchema')
const Comments=require('../models/commentSchema')
const Report=require('../models/reportSchema')
const Course=require('../models/courseSchema')





const addCourse=async(req,res)=>{
  console.log(req.body);
    const newCourse=new Course(req.body)
    try {
      const savedCourse=await newCourse.save()
      res.json(savedCourse)
      
    } catch (error) {
      res.json(error)
    }
  }

  const getCourses=async(req,res)=>{
    // console.log(req.params.id," params id in get couses in course control");
    try {
       const course=await Course.find({userId:req.params.id})
      //  console.log(course,"-------");
       res.json(course)
    } catch (error) {
       res.json(error)
    } 

  }

  const getSingleCourse=async(req,res)=>{
    console.log(req.params.id," params id in get couses in course control",req.body);
    try {
       const course=await Course.findOne({_id:req.params.id})
       console.log(course,"000");
       res.json(course)
    } catch (error) {
       res.json(error)
    } 

  }


  const courselist=async(req,res,next)=>{

    console.log("trial console.............");
    try {
       const allcourse=await Course.find()
   
       res.json(allcourse)
    } catch (error) {
       res.json(error)
    } 

  }

const enrollCourse = async (req, res , next) => {
      console.log(req.body.userId);
    console.log(req.params.id,"@@@@@@@@@@@@@@@");
    try{
        console.log('enrolllllll');
        const course=await Course.findById(req.params.id)
        const user=await Users.findById(req.body.userId)

        // console.log(course,"course log after find by ID");
        if(!course.enrollments.includes(req.body.userId)){
            await course.updateOne({$push:{enrollments:req.body.userId}})
            await user.updateOne({$push:{enrolledCourses:req.params.id}})
            const enr = {
              status:true
            }
            console.log('enrolllllll2222222222222');
            res.json({enr})

        }else{
            await course.updateOne({$pull:{enrollments:req.body.userId}}) 
            await user.updateOne({$pull:{enrolledCourses:req.params.id}})
            const enr = {
              status:false
            }
            console.log('enrolllllll333333333333333333');
            res.json({enr})
        }
    }catch(error){
        res.json(error)
    }

}

const saveCourse = async(req, res) => {
  console.log(req.body.userId,"user id and sid ");
  console.log(req.params.id);

  try {
    const user=await Users.findById(req.body.userId)
    const course=await Course.findById(req.params.id)

    if(!course.BookmarkedUsers.includes(req.body.userId)){
    await course.updateOne({$push:{BookmarkedUsers:req.body.userId}})

     const saved=await Course.find()
     console.log(saved,"numma scenaanu");
      res.json({status:true, data:saved })
  
  }else{
      await course.updateOne({$pull:{BookmarkedUsers:req.body.userId}})
      res.json({status:false})
  }
    
  } catch (error) {
    res.json(error)
  }
}





  module.exports={addCourse, getCourses, courselist, enrollCourse, saveCourse,getSingleCourse}

//   const updatePost=async(req,res)=>{
//     try{
//         const post= await Post.findById(req.params.id)
//         if(post.userId === req.body.userId){
//            await post.updateOne({$set:req.body})
//            res.json('post updated successfully')
//         }else{
//             res.json("you can update only your post")
//         }

//     }catch(error){
//       res.json(error)
//     }
   
// }

// const deletePost=async(req,res)=>{
//     try{
//         const post= await Post.findByIdAndDelete(req.params.id)
//         if(post.userId === req.body.userId){
//            await post.deleteOne()
//            res.json('post deleted successfully')
//         }else{
//             res.json("you can delete only your post")
//         }

//     }catch(error){
//       res.json(error)
//     }
// }

// const likePost=async(req,res)=>{
//     console.log(req.body.userId);
//     console.log(req.params.id);
//     try{
//         console.log('like');
//         const post=await Post.findById(req.params.id)
//         console.log(post);
//         if(!post.likes.includes(req.body.userId)){
//             await post.updateOne({$push:{likes:req.body.userId}})
//             res.json("The post has been liked")

//         }else{
//             await post.updateOne({$pull:{likes:req.body.userId}}) 
//             res.json("The post has been unliked")
//         }
//     }catch(error){
//         res.json(error)
//     }
//    }

// const getPost=async(req,res)=>{
//     try {
//        const post=await Post.findById(req.params.id)
//        res.json(post)
//     } catch (error) {
//        res.json(error)
//     } 

//   }


//   const timelinePost=async(req,res)=>{
//     try {
//         const currentUser=await Users.findById(req.params.userId)
//         const userPosts=await Post.find({userId:currentUser._id}).sort({createdAt:-1})
//         const friendPosts=await Promise.all(
//             currentUser.followings.map((friendId)=>{
//                 return Post.find({userId:friendId}).sort({createdAt:-1})
//             })
//         )
//         res.json(userPosts.concat(...friendPosts))
//     } catch (error) {
//         res.json(error)
        
//     }
//    }
//    const userPost=async(req,res)=>{
//     try {
//         const user=await Users.findById(req.params.userId)
//         const userPosts=await Post.find({userId:user._id}).sort({createdAt:-1})
//         res.json(userPosts)
//     } catch (error) {
//         res.json(error)
        
//     }
//    }

//  const addComment=async(req,res)=>{
//     const comment=new Comments(req.body)
//     try {
//         const comments=await comment.save()
//         res.json(comments)
//     } catch (error) {
//         res.json(error)
//     }
//  }
//  const getPostComments=async(req,res)=>{
//     // console.log(req.params.id);
//     try {
//       const postComment=await Comments.find({postId:req.params.id})
//       res.json(postComment)
        
//     } catch (error) {
//        res.json(error) 
//     }
//  }

//  const reportPost=async(req,res)=>{
//     const newReport=new Report(req.body)
//     try {
//         const report=await newReport.save()
//         res.json(report)
//     } catch (error) {
//         res.json(error)
//     } 
//  }




//   module.exports={addPost,updatePost,deletePost,likePost,getPost,timelinePost,userPost,addComment,getPostComments,reportPost}
