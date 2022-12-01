import './Message.css'
import {format} from 'timeago.js'

function Message({message,own}) {
  return (
<div className={own? "message own":"message"}>
    <div className="messageTop">
       <img className='messageImage'src='/assets/b2.webp' alt=''></img>
       <p className='messageText'>{message.text}</p> 
    </div>

    <div className="messageBottom">{format(message.createdAt)}</div>
</div>
)
}

export default Message
