require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const path=require('path')

const app=express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/images',express.static(path.join(__dirname,'public/images')))


app.use('/',require('./routes/authRouter'))
app.use('/post',require('./routes/postRouter'))
app.use('/admin',require('./routes/adminRouter'))
app.use('/chat',require('./routes/chatRouter'))
app.use('/course',require('./routes/courseRouter'))


const URI=process.env.MONGODB_URL
mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},err=>{
    if(err) throw err;
    console.log('connected to mongodb');
})


const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is runing on port`,port);
})