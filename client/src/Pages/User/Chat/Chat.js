import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import ChatOnline from '../../../Components/Users/ChatOnline/ChatOnline'
import Conversation from '../../../Components/Users/Conversations/Conversation'
import Message from '../../../Components/Users/Message/Message'
import Navbar from '../../../Components/Users/Navbar.js/Navbar'
import './Chat.css'
import { io } from 'socket.io-client'
import InputEmoji from 'react-input-emoji'

function Chat() {
  const user = useSelector(state => state.user)
  const [selected, setSelected] = useState(false)
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [onlineUsers, setOnlineUsers] = useState([])
  const [arrivalMessage, setarrivalMessage] = useState(null)
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const scrollRef = useRef()
  const socket = useRef()

  /* -------------------------------------------------------------------------- */
  /*                            for get conversations                           */
  /* -------------------------------------------------------------------------- */


  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`/chat/${user._id}`)
        setConversations(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getConversations()
  }, [user._id])



  /* -------------------------------------------------------------------------- */
  /*                            for get the messages                            */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const getMessages = async () => {
      const res = await axios.get('/chat/message/' + currentChat._id)
      setMessages(res.data)
    }
    getMessages()
  }, [currentChat])



  useEffect(() => {
    socket.current = io("ws://localhost:2002")
    socket.current.on("getMessage", (data) => {
      setarrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      })
    })

  }, [])


  useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage, currentChat])

  useEffect(() => {
    socket.current.emit('addUser', user._id)
    socket.current.on('getUsers', (users) => {
      setOnlineUsers(user.followings.filter((f) => users.some((u) => u.userId === f)));
    })
  }, [user])


  const handleSend = async (e) => {
    e.preventDefault()
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id
    }

    const receiverId = currentChat.members.find((member) => member !== user._id)

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage
    })

    try {
      const res = await axios.post(`/chat/message`, message)
      setMessages([...messages, res.data])
      setNewMessage("")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" })
  }, [messages])


  const handleChange = (newMessage) => {
    console.log(newMessage);
    setNewMessage(newMessage)
  }
  const fetchUsers = async () => {
    setShowModal(true)
    const allUsers = await axios.get(`/admin/users`)
    if (allUsers) {
      setUsers(allUsers.data)
    } else {
      console.log('error');
    }
  }

  const startChat = async (receiverId) => {
    const res = await axios.post('http://localhost:5000/chat', { senderId: user._id, receiverId: receiverId })
    if (res) {
      window.location.reload()
    }
  }



  return (
    <div>
      <Navbar />
      <div className='messenger'>
        <div className='lg chatMenu' >
          <div className='chatMenuWrapper'>
            <input placeholder='Serach for friends' className='chatMenuInput' />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}

          </div>
          <span className='text-gray-400'> Click here to start new chat </span>
          <button className='rounded-full  bg-purple-600 px-3 py-1 text-white  text-2xl' value={showModal} onClick={fetchUsers}>+</button>
        </div>
        <div className='chatBox'>
          <div className='chatBoxWrapper'>
            {
              currentChat ?
                <>
                  {messages.length !== 0 ?
                    <div className='chatBoxTop'>
                      {messages.map((m) => (
                        <div ref={scrollRef}>
                          <Message message={m} own={m.sender === user._id} />
                        </div>
                      ))}

                    </div> : <div>Oops there is no messages...</div>
                  }

                  <div className='chatBoxBottom'>
                    <InputEmoji
                      placeholder='Message'
                      class='block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700'
                      value={newMessage}
                      onChange={handleChange}
                    />
                    {/* <textarea className='chatMessageInput' placeholder='write something...' value={newMessage}
                    onChange={(e)=>setNewMessage(e.target.value)}
                     ></textarea> */}
                    {newMessage !== '' ? <button className='chatSubmitButton' onClick={handleSend}>Send</button> : null}

                  </div>
                </> : <div className='noConversationText'>Open new conversation to show the messages...</div>
            }

          </div>
        </div>
        <div className=' chatOnline'>
          <div className='chatOnlineWrapper'>
            <ChatOnline onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>


      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                <div className="flex  justify-between p-5 border-b border-solid border-slate-200 rounded-t flex-col">
                  <h6 className="text-xl font-semibold">Choose one to start new conversation</h6>
                  {users.map((obj) => (
                    <div className='flex flex-col  justify-between'>
                      {console.log(conversations, 'dddddddddddddddddddd')}
                      {obj.username !== user.username &&
                        <div className="relative p-6 flex  justify-between">
                          <img class="w-12 h-12 rounded-full bg-gray-100" src='/assets/avatar.jpg'></img>
                          {selected ? <div className='p-3 text-green-500' onClick={() => setSelected(!selected)}>{obj.username}
                          </div> :
                            <div className='py-3 mr-28' onClick={() => setSelected(!selected)}>{obj.username}
                            </div>
                          }
                          <div>
                            <button
                              className="bg-blue-500 text-white active:bg-emerald-600   text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => startChat(obj._id)}
                            >
                              Start Chat
                            </button>
                          </div>
                        </div>
                      }


                    </div>
                  ))}
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    </div>
  )
}

export default Chat
