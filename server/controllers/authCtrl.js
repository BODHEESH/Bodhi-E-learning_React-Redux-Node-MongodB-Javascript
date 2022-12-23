const Users=require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userModel = require('../models/userModel')
const userVerification = require("../models/verification");
const nodemailer=require('nodemailer')
const Notification= require('../models/notificationSchema')
const notificationSchema = require('../models/notificationSchema')

  /* -------------------------------------------------------------------------- */
   /*                                email config                                */
   /* -------------------------------------------------------------------------- */
   const transporter=nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "elearningbodhi@gmail.com",
      pass: "bxnheviauygqsfke",
    },
  })
 



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

        //   await newUser.save()

        //    res.json({
        //     msg:'register success',
        //     user:{
        //        ...newUser._doc,
        //        password:''
        //     }  
        // })
        await newUser.save().then(async(result)=>{
          sendOtp(result,res)
          res.json({
            msg:'register success',
            user:{
               ...newUser._doc,
               password:''
            }  
          })

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
        if(req.body.editPost.password){
            try {
                const salt=await bcrypt.genSalt(10)
                req.body.editPost.password=await bcrypt.hash(req.body.editPost.password,salt)
            } catch (error) {
                return res.json(error)
            }
        }
        try{
            const user=await Users.findByIdAndUpdate(req.params.id,{
              $set:req.body.editPost,
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

const getUserdata = async(req,res)=>{

  console.log(req.params.userId);
  const userId = req.params.userId;
  try {
    const user =  await Users.findById(userId)
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}

const getAllusers = async (req, res )=>{

  try {
    const Allusers =  await Users.find()
    res.status(200).json(Allusers);
  } catch (error) {
    res.status(500).json(err);
  }
  

}

const followUser=async(req,res)=>{
  console.log("-------000000000000");
  console.log(req.params.id);
  console.log(req.body.userId);

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

    console.log("+++++++++++");
  console.log(req.params.id);
  console.log(req.body.userId);
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


 
 const getSuggestions = async (req, res) => {
  try {
     Users.find({followers:{$nin:req.params.id}}).limit(15)  
        .then((response) => {
           res.status(200).json(response)
        })
        .catch((err) => {
           res.status(500).json("Something went wrong")
        })
  } catch (error) {
     res.status(500).json({ message: "Something went wrong!" })
  }
}








/* -------------------------------------------------------------------------- */
/*                         --------------------------                         */
/* -------------------------------------------------------------------------- */



const sendOtp = async (result, res) => {
  console.log(result, "hey there");
  try {
    const OTP = await Math.floor(100000 + Math.random() * 900000).toString();
    console.log(OTP);
    var senEMail = {
      from: "elearningbodhi@gmail.com",
      to: result.email,
      subject: "Sending Email from BODHI E LEARNING ",
      text: `Hi ${result.username} Your OTP pin has been generated `,
      html: `<h1>Hi ${result.username}</h1><p>Your OTP is ${OTP}</p>`,
    };

    let hashOTP = await bcrypt.hash(OTP, 10);
    let verify = await userVerification.findOne({ userId: result._id });
    if (!verify) {
      const userverification = new userVerification({
        userId: result._id,
        Otp: hashOTP,
        Created: Date.now(),
        Expiry: Date.now() + 100000,
      });
      await userverification.save();
    } else {
      await userVerification.updateOne(
        { userId: result._id },
        { Otp: hashOTP }
      );
    }

    transporter.sendMail(senEMail, function (error, info) {
      console.log("oioioioi");
      if (error) {
        console.log(error, "yuyuuy");
      } else {
        res.json({
          status: "pending",
          msg: "Verification otp mail sent",
          mail: result.email,
          user: result,
        });
      }
    });  
  } catch (error) {
    console.log(error);
  }
};


const verifyOtp = async (req, res) => {
  console.log(req.body.OTP,'llllllllllll');
  let OtpVerify = await userVerification.findOne({ userId: req.body.user });
  let correctOtp = await bcrypt.compare(req.body.OTP, OtpVerify.Otp);
  if (correctOtp) {
    await Users.updateOne(
      { _id: req.body.user },
      { $set: { verified: "true" } }
    );
    res.status(200).json({ verified: true });
  } else {
    res.status(200).json({ verified: false, msg: "Incorrect OTP" });
  }
};




const sendPasswordLink=async(req,res)=>{
  const {email}=req.body
  if(!email){
    res.json('Enter your Email')
  }
  try {
    const user=await userModel.findOne({email:email})
    const token=jwt.sign({_id:user._id}, process.env.JWT_KEY,{
      expiresIn:"120s"
    })
    const usertoken=await userModel.findByIdAndUpdate({_id:user._id},{token:token},{new:true})
    if(usertoken){
        const mailOptions={
        from:"deltadelta9595@gmail.com",
        to:email,
        subject:"Sending a email for password reset",
        text:`Click this link to reset your password http://localhost:3000/forgot/${user._id}/${usertoken.token}`
      }
      transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
          console.log(error);
          res.json('email not sended properly')
        }else{
          console.log('email send',info.response);
          res.json('Email send successfully')

        }
      })
    }
    
  } catch (error) {
    res.json(error)
  }
 
}

/* -------------------------------------------------------------------------- */
/*                                 RESEND OTP                                 */
/* -------------------------------------------------------------------------- */


const resendOTP=  async (req, res) => {
  console.log(req.body,'jjjjjjjjjjjjjjjjjjjjjjj');
  sendOtp(req.body, res).then((response) => {
      res.status(200).json(true)
  })

}

const updatePassword=async(req,res)=>{
  const {password}=req.body
  try {
    const salt=await bcrypt.genSalt(10)
    const newpassword=await bcrypt.hash(password,salt)
    const user=await Users.updateOne({_id:req.params.id},{
      $set:{password:newpassword},
  })
  const updatedUser=await Users.findById(req.params.id)
  res.json(updatedUser)
   } catch (error) {
    return res.json(error)
   }
}

const searchUser=async(req,res)=>{
  let data=req.body.search
  try {
    let users=await Users.find({username: {$regex: '^' +data, $options: 'i'}})
    res.json(users)
    
  } catch (error) {
    res.json(error) 
  }
}



const Notifications=async(req,res)=>{
  const notification=new Notification(req.body)
  try {
      const notifications=await notification.save()
      res.json(notifications)
  } catch (error) {
      res.json(error)
  }

}


const getNotifications=async(req,res)=>{
  try {
    const notification= await Notification.find({receiverId:req.params.id}).populate("senderId")
    let count = notification.filter((obj) => {
      if (obj.status == "true") {
        return obj;
      }
    }); 
    let countLength = count.length;
    console.log(countLength,'lllllllllll');
    res.json({notification,countLength}) 
  } catch (error) {
    res.json(error)
  }

}

const deleteNotifications=async(req,res)=>{
  try {
    const res=await Notification.deleteMany({receiverId:req.params.id})
    if(res){
      res.json('success')
    }  
  } catch (error) {
    res.json(error)
  }
}

const ReadNotification = async (req, res) => {
  console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkk',req.params.userId);
  try {
    let data = await notificationSchema.updateMany(
      { userId: req.params.userId },
      { $set: {status:"false"} }
    );
    console.log(data,"auth controller dataaaaaaaaaaaaa");
    res.status(200).json("updated");  
  } catch (error) {
    res.status(500).json(error);
  }
};



    



module.exports={authCtrlRegister,authCtrlLogin,updateUser,
  deleteUser,getUser,unFollowUser,followUser,getUserdata,
  getSuggestions,verifyOtp,resendOTP, sendPasswordLink,
  updatePassword,getAllusers, searchUser, Notifications,
  getNotifications, deleteNotifications, ReadNotification
}    