const router=require('express').Router()
const {authCtrlGetAccessToken,authCtrlLogin,authCtrlRegister,authCtrlLogout,updateUser,deleteUser,getUser,followUser,unFollowUser,getFriends, getUserdata, getSuggestions, sendPasswordLink, updatePassword, verifyOtp, resendOTP, getAllusers, searchUser}=require('../controllers/authCtrl')

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



module.exports=router
