const router=require('express').Router()
const {authCtrlGetAccessToken,authCtrlLogin,authCtrlRegister,authCtrlLogout,updateUser,deleteUser,getUser,followUser,unFollowUser,getFriends, getUserdata, getSuggestions, sendPasswordLink, updatePassword, verifyOtp, resendOTP, getAllusers, searchUser, Notifications, getNotifications, deleteNotifications, ReadNotification}=require('../controllers/authCtrl')
const check = require('../middleware/verify');


router.post('/register',authCtrlRegister)

router.post('/login',authCtrlLogin)

router.put('/:id',updateUser)

router.delete('/:id',deleteUser)

router.get('/:id',getUser)

router.get('/userdata/:userId',getUserdata)

router.get('/data/getAllusers',getAllusers)

router.put('/follow/:id',followUser)

router.put('/unfollow/:id',unFollowUser)

router.get('/suggestions/:id',getSuggestions)


router.post('/sendPasswordLink',sendPasswordLink)

router.put('/updatePassword/:id',updatePassword)

router.post("/verifyOtp", verifyOtp);

router.post("/resendOtp", resendOTP);

router.put('/search/User',searchUser)

/* ------------------------------ notifications ----------------------------- */

router.post('/notification',Notifications)

router.get('/notification/:id',getNotifications)

router.delete('/notification/:id',deleteNotifications)

router.put('/notification/viewed/:id',ReadNotification)



module.exports=router
