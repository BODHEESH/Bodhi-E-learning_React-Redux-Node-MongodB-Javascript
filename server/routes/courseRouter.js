const express=require('express')
const router=express.Router()
const multer=require('multer');
const { addCourse, getCourses } = require('../controllers/courseCtrl');
const check = require('../middleware/verify');


const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, './public/images');
    },
    filename(req, file, callback) {
        callback(null,file.originalname);
    },
});

const upload = multer({ storage:storage});

router.post('/upload', upload.array('file',2), (req, res) => {
    console.log(req.body,'course uploading multer');
    try {
        res.json("success")
    } catch (error) {
        res.json(error)
    }
})

router.post("/",addCourse)

router.get('/:id',getCourses)

// router.put('/:id',updatePost) 

// router.delete('/:id',deletePost) 

// router.put('/like/:id',likePost) 



// router.get('/timeline/:userId',check,timelinePost)

// router.get('/userpost/:userId',userPost)

// router.post('/addcomment/:id',addComment)

// router.get('/getcomments/:id',getPostComments)

// router.post('/report/:id',reportPost)



module.exports=router