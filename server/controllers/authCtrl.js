const Users=require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userModel = require('../models/userModel')

    const authCtrlRegister=async(req,res)=>{
        try {
            const {fullname,username,email,password}=req.body
            let newUserName=username.toLowerCase()


            const user_name=await Users.findOne({username:newUserName})
            if(user_name) return res.json({msg:'This usrename is already is already exists'}) 
            
            const user_email=await Users.findOne({email})
            if(user_email) return res.json({msg:'This email is already is already exists'})  

            
           if(password.length<6) return res.json({msg:'Password must be atleast 6 characters'})  


           const passwordHash=await bcrypt.hash(password,10)
           
          const newUser=new userModel({
            fullname,username:newUserName,email,password:passwordHash
          })

          await newUser.save()

           res.json({
            msg:'register success',
            user:{
               ...newUser._doc,
               password:''
            }  
        })

        } catch (error) {
            return res.json({msg:error.message})
        }
    }
    
    const authCtrlLogin=async(req,res)=>{
        try {
         const {email,password}=req.body

         const user=await userModel.findOne({email})
                
         if(!user) return res.json({msg:'Could not find the user'})
         
         const isMatch=await bcrypt.compare(password,user.password)
         if(!isMatch) return res.json({msg:"Password is incorrect"})
         
         if(user.status==="inactive") return res.json({msg:"User is blocked"})
         
        
         const id='8394n43x14n384n1njk'
         const usertoken=jwt.sign({id}, process.env.JWT_KEY,{
             expiresIn:"365d",
         })
         console.log(usertoken);

          res.json({
           msg:'Login success',
           usertoken:usertoken,
           user:{
              ...user._doc,
              password:''
           }})

        } catch (error) {
            return res.json({msg:error.message})
        }
    }

    
   const updateUser=async(req,res)=>{
      if(req.body.userId===req.params.id||req.body.isAdmin){
        if(req.body.password){
            try {
                const salt=await bcrypt.genSalt(10)
                req.body.password=await bcrypt.hash(req.body.password,salt)
            } catch (error) {
                return res.json(error)
            }
        }
        try{
            const user=await Users.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            })
            res.json(user)
        }catch(error){
            return res.json(error)
        }
      }else{
        res.json("You can only update your details!")
      }
   }


   const deleteUser=async(req,res)=>{
    if(req.body.userId===req.params.id||req.body.isAdmin){
      try{
          await Users.findByIdAndDelete(req.params.id)
          res.json("Account has been deleted")
      }catch(error){
          return res.json(error)
      }
    }else{
      res.json("You can only delete your details!")
    }
}

const getUser=async(req,res)=>{
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await Users.findById(userId)
      : await Users.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
}

const followUser=async(req,res)=>{
    if(req.body.userId!==req.params.id){
       try {
         const user=await Users.findById(req.params.id)
         const currentUser=await Users.findById(req.body.userId)
         if(!user.followers.includes(req.body.userId)){
           await user.updateOne({$push:{followers:req.body.userId}})
           await currentUser.updateOne({$push:{followings:req.params.id}})
           res.json("User has been followed")
         }else{
            res.json('You already followed')
         }
       } catch (error) {
         res.json(error)
       }
    }else{
     res.json("You can't follow yourself")
    }
 }
 

 const unFollowUser=async(req,res)=>{
    if(req.body.userId!==req.params.id){
       try {
         const user=await Users.findById(req.params.id)
         const currentUser=await Users.findById(req.body.userId)
         if(user.followers.includes(req.body.userId)){
           await user.updateOne({$pull:{followers:req.body.userId}})
           await currentUser.updateOne({$pull:{followings:req.params.id}})
           res.json("User has been unfollowed")
         }else{
            res.json('You are not following this user')
         }

       } catch (error) {
         res.json(error)
       }
    }else{
     res.json("You can't unfollow yourself")
    }
 }
 



module.exports={authCtrlRegister,authCtrlLogin,updateUser,deleteUser,getUser,unFollowUser,followUser}    