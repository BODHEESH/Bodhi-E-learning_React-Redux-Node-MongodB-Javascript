const express = require('express')
const { getUsers, blockUser, UnblockUser,adminLogin,getAllPosts,getAllComment,getAllReports} = require('../controllers/adminCtrl')
const router = express.Router()


router.get('/users',getUsers)

router.post('/blockUsers/:id',blockUser)

router.post('/UnblockUsers/:id',UnblockUser)

router.post('/login',adminLogin)

router.get('/allPosts',getAllPosts)

router.get('/allComments',getAllComment)

router.get('/allReports',getAllReports)




module.exports = router