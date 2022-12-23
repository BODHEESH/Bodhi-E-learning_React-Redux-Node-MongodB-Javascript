const User = require('../models/userModel')
const Post = require('../models/postSchema')
const Reports=require('../models/reportSchema')
const commentSchema = require('../models/commentSchema')

const getUsers = (req,res)=>{
try {
    User.find().sort({_id:-1}).then(response =>{
        res.status(200).json(response)
    }).catch(error =>{
        res.json(error)
    })
         
} catch (error) {
    console.log(error);
}

}

const blockUser = async(req,res)=>{
  try {
    User.findByIdAndUpdate({_id: req.params.id},{
        $set:{
            status:"inactive"
        }
    }).then(response =>{
        if(response) res.status(200).json({update: true})
    }).catch(error =>{
        res.json(error)
    })
    
  } catch (error) {
    console.log(error);
  }
}

const UnblockUser = (req,res)=>{
    try {
        User.findByIdAndUpdate({_id: req.params.id},{
            $set:{
                status:"active"
            }
        }).then(response =>{
            if(response) res.status(200).json({update: true})
        }).catch(error =>{
            res.json(error)
        })
        
      } catch (error) {
        console.log(error);
      }
}

const adminLogin=(req,res)=>{
    try {

        const {ADMIN_EMAIL,ADMIN_PWD}=process.env
        const {email,password}= req.body
        if(email===ADMIN_EMAIL){
            if(password===ADMIN_PWD){
                res.json({admin: true, auth:true})

            
        }else{
            res.json('Incorrect Password')
        }
    }else{
        res.json('Incorrect email id')
    }
        
    } catch (error) {
       res.json(error) 
    }
}

const getAllPosts=async(req,res)=>{
    try {
        const allPost= await Post.find()
        res.json(allPost)
        
    } catch (error) {
       res.json(error) 
    }
}


const getAllComment=async(req,res)=>{
    try {
        const allComment= await commentSchema.find()
        res.json(allComment)
        
    } catch (error) {
       res.json(error) 
    }
}



const getAllReports=async(req,res)=>{
    try {
        const allReport= await Reports.find()
        res.json(allReport)
        
    } catch (error) {
       res.json(error) 
    }
}

// const blockPost = async(req,res)=>{
//     console.log(req.params.id,"++++++++++++++");
//     try {
//       Post.findByIdAndUpdate({_id: req.params.id},{
//           $set:{
//               status:"Blocked"
//           }
//       }).then(response =>{
//           if(response) res.status(200).json({update: true})
//       }).catch(error =>{
//           res.json(error)
//       })
      
//     } catch (error) {
//       console.log(error);
//     }
//   }

module.exports={getUsers,blockUser,UnblockUser,adminLogin,getAllPosts,getAllComment,getAllReports}