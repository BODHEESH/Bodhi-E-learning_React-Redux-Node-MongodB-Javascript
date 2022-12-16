import './Message.css'
import {format} from 'timeago.js'

function Message({message,own}) {
  return (
<div className={own? "message own":"message"}>
    <div className="messageTop">
       <img className='messageImage'src='https://cdn2.vectorstock.com/i/1000x1000/34/96/flat-business-man-user-profile-avatar-in-suit-vector-4333496.jpg' alt=''></img>
       <p className='messageText'>{message.text}</p> 
    </div>

    <div className="messageBottom">{format(message.createdAt)}</div>
</div>
)
}

export default Message
