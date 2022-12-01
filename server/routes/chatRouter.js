const router=require('express').Router()
const {addConversation,getConversation,sendMessage,getMessage,getTwoConversations,getFriends}=require('../controllers/chatCtrl')

router.post('/',addConversation)

router.get('/:userId',getConversation)

router.post('/message',sendMessage)

router.get('/message/:conversationId',getMessage)

router.get('/find/:firstUserId/:secondUserId',getTwoConversations)

router.get('/friendlist/:userId',getFriends)

module.exports=router;