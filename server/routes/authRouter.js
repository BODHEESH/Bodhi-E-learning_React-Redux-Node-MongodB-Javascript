const router=require('express').Router()
const {authCtrlGetAccessToken,authCtrlLogin,authCtrlRegister,authCtrlLogout,updateUser,deleteUser,getUser,followUser,unFollowUser,getFriends}=require('../controllers/authCtrl')

router.post('/register',authCtrlRegister)

router.post('/login',authCtrlLogin)

router.put('/:id',updateUser)

router.delete('/:id',deleteUser)

router.get('/:id',getUser)

router.put('/follow/:id',followUser)

router.put('/unfollow/:id',unFollowUser)



module.exports=router
