
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import ChatOnline from '../../../Components/Users/ChatOnline/ChatOnline'
import Conversation from '../../../Components/Users/Conversations/Conversation'
import Message from '../../../Components/Users/Message/Message'
import Navbar from '../../../Components/Users/Navbar.js/Navbar'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import FeedIcon from '@mui/icons-material/Feed';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Chat.css'
import { Link } from 'react-router-dom'
import { io } from 'socket.io-client'
import InputEmoji from 'react-input-emoji'
import Swal from 'sweetalert2'

function Chat() {
  const user = useSelector(state => state.user)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
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
  const [showOnlineFriends, setShowOnlineFriends] = useState(false)
  const [receiver, setReceiver] = useState('')
  const [receivername, setReceiverName] = useState('')
  const [receiverpic, setReceiverPic] = useState('')

  /* -------------------------------------------------------------------------- */
  /*                            for get conversations                           */
  /* -------------------------------------------------------------------------- */


  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`/chat/${user._id}`,
          { headers: { "x-access-token": localStorage.getItem('usertoken') } })
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
      const res = await axios.get('/chat/message/' + currentChat._id,
        { headers: { "x-access-token": localStorage.getItem('usertoken') } })
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
      const res = await axios.post(`/chat/message`, message,
        { headers: { "x-access-token": localStorage.getItem('usertoken') } })
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
    const res = await axios.post('http://localhost:5000/chat', { senderId: user._id, receiverId: receiverId },
      { headers: { "x-access-token": localStorage.getItem('usertoken') } })
    console.log(res);
    if (res.data === 'alreadyExists') {
      Swal.fire({
        position: 'top-end',
        text: 'You are already chatting with this user',
        showConfirmButton: false,
        timer: 1500,
        background: 'Tomato',
        color: 'white'
      })
      setShowModal(false)
    } else {
      window.location.reload()
    }
  }


  useEffect(() => {
    const fetchReceiver = async () => {
      const res = await axios.get(`http://localhost:5000/findUser/${receiver}`,
        { headers: { "x-access-token": localStorage.getItem('usertoken') } })
      setReceiverName(res.data.username)
      setReceiverPic(res.data.profilePicture)
    }
    fetchReceiver()
  }, [receiver])


  return (
    < >
      <div className='bg-white'>


        <Navbar />
        <div class="h-screen chatscreen p-20 ">
          <section class=" shadow-xl rounded-md w-full lg:w-11/12 lg:mx-auto flex">
            {/* <!-- Left section --> */}
            <div class="w-full md:w-3/6 lg:w-3/6 xl:w-3/6 flex flex-col justify-start items-stretch  bg-white bg-opacity-80 rounded-md lg:rounded-none lg:rounded-l-md p-3">
              <div class="flex flex-row justify-between items-center mb-4">
                {/* <div class="flex flex-row">
            <button class="bg-red-500 text-white rounded-full p-1 mr-2 cursor-pointer h-4 w-4 focus:outline-none focus:ring" aria-label="Close">
            </button>
            <button class="bg-yellow-500 text-white rounded-full p-1 mr-2 cursor-pointer h-4 w-4 focus:outline-none focus:ring" aria-label="Restore Down">
            </button>
            <button class="bg-green-500 text-white rounded-full p-1 mr-5 cursor-pointer h-4 w-4 focus:outline-none focus:ring" aria-label="Minimize">
            </button>
          </div> */}
                <div class="p-1 rounded-full text-gray-500">
                  <button class="flex flex-col justify-center items-center p-2 rounded-full focus:ring-2 hover:bg-gray-50 hover:bg-opacity-30 focus:outline-none" aria-label="Add"
                    value={showModal} onClick={fetchUsers}>
                    <svg class="fill-current h-4 w-4" viewBox="0 0 25 25">
                      <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex-auto flex flex-col">
                <div class="flex-auto flex flex-row">
                  <div class="p-1 flex flex-col justify-between items-center">
                    <div class="hidden md:block">
                      <ul class="">
                        <Link to='/home'><li class="p-2 text-gray-900 cursor-pointer a">
                          <FeedIcon />
                          <p class="text-xs font-semibold">Home</p>
                        </li></Link>
                        <li class="p-2 text-gray-900 cursor-pointer">
                          <SupervisorAccountIcon onClick={() => setShowOnlineFriends(true)} />
                          <p class="text-xs font-semibold">Friends</p>
                        </li>
                        <Link to='/chat'><li class="p-2 text-gray-900 cursor-pointer">
                          <WorkIcon />
                          <p class="text-xs font-semibold">Chat</p>
                        </li> </Link>
                        <li class="p-2 text-gray-900 cursor-pointer">
                          <NotificationsIcon />
                          <p class="text-xs font-semibold ">Notifications</p>
                        </li>
                      </ul>
                    </div>

                  </div>

                  <div class="w-full p-1">
                    <h2 className='text-2xl font-bold text-center'>Chats</h2>
                    <div class="w-full p-1">

                      {/* <input
                  type="text"
                  placeholder="Search"
                  class="search-input bg-gray-600 bg-opacity-10 placeholder-gray-500 text-gray-400 text-sm py-1 px-10 rounded-md outline-none w-full focus:outline-none focus:ring"
                /> */}
                    </div>

                    <div className="">
                      <ul class=" min-w-full h-96 messagelist">

                        {conversations.map((c) => (
                          <div onClick={() => {
                            setCurrentChat(c); setReceiver(c.members.filter(members => {
                              return members !== user._id
                            }))
                          }}>
                            <Conversation conversation={c} currentUser={user} />
                          </div>
                        ))}

                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='chatBox'>
              <div className='chatBoxWrapper'>
                {
                  currentChat ?
                    <>

                      <div className='conversationsss p-3 shadow-zinc-400'>
                        <img className='flex h-11 w-11 rounded-full ' src="https://cdn2.vectorstock.com/i/1000x1000/34/96/flat-business-man-user-profile-avatar-in-suit-vector-4333496.jpg" alt='pic' />
                        {/* <img className='flex h-11 w-11 rounded-full ' src={PF + receiverpic} alt='pic' /> */}
                        <span className='ml-5'>{receivername}</span>
                      </div>

                      {messages.length !== 0 ?
                        <div className='chatBoxTop'>
                          {messages.map((m) => (
                            <div ref={scrollRef}>
                              <Message message={m} own={m.sender === user._id} pic={receiverpic} />
                            </div>
                          ))}
                        </div> : <div className='noMessageText'>Oops there is no messages...</div>
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
          </section>

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">

                  <div className="border-0 rounded-lg shadow-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                    <div className="flex  justify-between p-5border-b border-solid border-slate-200 rounded-t flex-col">
                      <h6 className="text-xl font-semibold">Choose one to start new conversation</h6>
                      {users.map((obj) => (
                        <div className='flex flex-col  justify-between'>
                          {obj.username !== user.username &&
                            <div className="relative p-6 flex  justify-between">
                              <img class="w-12 h-12 rounded-full bg-gray-100" src={PF + obj.profilePicture}></img>
                              {selected ? <div className='p-3 text-green-500' onClick={() => setSelected(!selected)}>{obj.username}
                              </div> :
                                <div className='py-3 mr-28' onClick={() => setSelected(!selected)}>{obj.username}
                                </div>
                              }
                              <div>
                                <button
                                  className="bg-gray-400 text-white active:bg-emerald-600   text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
          {showOnlineFriends &&
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">

                <div className="border-0 rounded-lg shadow-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex  justify-between p-5border-b border-solid border-slate-200 rounded-t flex-col  p-10">
                    <h6 className="text-xl font-semibold">Online friends</h6>
                    <div className=' chatOnline'>
                      {onlineUsers ? <div className='chatOnlineWrapper'>
                        <ChatOnline onlineUsers={onlineUsers}
                          currentId={user._id}
                          setCurrentChat={setCurrentChat}
                        />
                      </div> : "Oops no one has in online"}

                    </div>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowOnlineFriends(false)}
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
                      onClick={() => setShowOnlineFriends(false)}
                    >
                      Close
                    </button>

                  </div>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </>

















    //   <div>
    //     <Navbar/>
    //     <div className='messenger'>
    //       <div  className='lg chatMenu' >
    //           <div className='chatMenuWrapper'>
    //             <input placeholder='Serach for friends' className='chatMenuInput'/>
    //             {conversations.map((c)=>(
    //                 <div onClick={()=>setCurrentChat(c)}>
    //                   <Conversation conversation={c} currentUser={user}/>
    //                 </div>
    //             ))}

    //           </div>
    //           <span className='text-gray-400'> Click here to start new chat </span>
    //           <button className='rounded-full  bg-purple-600 px-3 py-1 text-white  text-2xl' value={showModal} onClick={fetchUsers}>+</button>
    //       </div>
    //       <div className='chatBox'>
    //          <div className='chatBoxWrapper'>
    //           {
    //             currentChat?
    //             <>
    //             {messages.length!==0?
    //              <div className='chatBoxTop'>
    //              {messages.map((m)=>(
    //                <div ref={scrollRef}>
    //                 <Message message={m} own={m.sender===user._id}/>
    //                 </div>
    //              ))}

    //            </div>:<div>Oops there is no messages...</div>
    //             }

    //          <div className='chatBoxBottom'>
    //          <InputEmoji
    //            placeholder='Message'
    //            class='block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700'
    //            value={newMessage}
    //            onChange={handleChange}
    //           />
    //           {/* <textarea className='chatMessageInput' placeholder='write something...' value={newMessage}
    //           onChange={(e)=>setNewMessage(e.target.value)}
    //           ></textarea> */}
    //           {newMessage!==''?<button className='chatSubmitButton' onClick={handleSend}>Send</button>:null}

    //          </div>
    //          </>:<div className='noConversationText'>Open new conversation to show the messages...</div>
    //           }

    //          </div>
    //       </div>
    //       <div   className=' chatOnline'>
    //        <div className='chatOnlineWrapper'>
    //             <ChatOnline onlineUsers={onlineUsers}
    //             currentId={user._id}
    //             setCurrentChat={setCurrentChat}
    //             />
    //        </div>
    //       </div>
    //     </div>


    //     {showModal ? (
    //   <>
    //     <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
    //       <div className="relative w-auto my-6 mx-auto max-w-3xl">

    //         <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
    //           <div className="flex  justify-between p-5 border-b border-solid border-slate-200 rounded-t flex-col">
    //             <h6 className="text-xl font-semibold">Choose one to start new conversation</h6>
    //             {users.map((obj)=>(
    //             <div className='flex flex-col  justify-between'>
    //               {obj.username!==user.username&&
    //                    <div className="relative p-6 flex  justify-between">
    //                    <img class="w-12 h-12 rounded-full bg-gray-100" src={PF+obj.profilePicture}></img>
    //                    {selected?  <div className='p-3 text-green-500' onClick={()=>setSelected(!selected)}>{obj.username} 
    //                   </div>:
    //                    <div className='py-3 mr-28' onClick={()=>setSelected(!selected)}>{obj.username}
    //                    </div>
    //                   }
    //                    <div>
    //                      <button
    //                     className="bg-blue-500 text-white active:bg-emerald-600   text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    //                     type="button"
    //                     onClick={()=>startChat(obj._id)}
    //                   >
    //                    Start Chat
    //                   </button>
    //                   </div>
    //                    </div>
    //               }


    //             </div>
    //               ))}
    //             <button
    //               className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
    //               onClick={() => setShowModal(false)}
    //             >
    //               <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
    //                 ×
    //               </span>
    //             </button>
    //           </div>
    //           <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
    //             <button
    //               className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    //               type="button"
    //               onClick={() => setShowModal(false)}
    //             >
    //               Close
    //             </button>

    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    //   </>
    // ) : null}

    //   </div>
  )
}

export default Chat



// import axios from 'axios'
// import React, { useEffect, useRef, useState } from 'react'
// import { useSelector } from 'react-redux'
// import ChatOnline from '../../../Components/Users/ChatOnline/ChatOnline'
// import Conversation from '../../../Components/Users/Conversations/Conversation'
// import Message from '../../../Components/Users/Message/Message'
// import Navbar from '../../../Components/Users/Navbar.js/Navbar'
// import './Chat.css'
// import { io } from 'socket.io-client'
// import InputEmoji from 'react-input-emoji'

// function Chat() {
//   const user = useSelector(state => state.user)
//   const [selected, setSelected] = useState(false)
//   const [conversations, setConversations] = useState([])
//   const [currentChat, setCurrentChat] = useState(false)
//   const [messages, setMessages] = useState([])
//   const [newMessage, setNewMessage] = useState('')
//   const [onlineUsers, setOnlineUsers] = useState([])
//   const [arrivalMessage, setarrivalMessage] = useState(null)
//   const [users, setUsers] = useState([])
//   const [showModal, setShowModal] = useState(false)
//   const scrollRef = useRef()
//   const socket = useRef()

//   // for get conversations

//   useEffect(() => {
//     const getConversations = async () => {
//       try {
//         const res = await axios.get(`/chat/${user._id}`)
//         setConversations(res.data)
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getConversations()
//   }, [user._id])





//   // for get the messages

//   useEffect(() => {
//     const getMessages = async () => {
//       const res = await axios.get('/chat/message/' + currentChat._id)
//       setMessages(res.data)
//     }
//     getMessages()
//   }, [currentChat])



//   useEffect(() => {
//     socket.current = io("ws://localhost:2002")
//     socket.current.on("getMessage", (data) => {
//       setarrivalMessage({
//         sender: data.senderId,
//         text: data.text,
//         createdAt: Date.now()
//       })
//     })

//   }, [])


//   useEffect(() => {
//     arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
//       setMessages((prev) => [...prev, arrivalMessage])
//   }, [arrivalMessage, currentChat])

//   useEffect(() => {
//     socket.current.emit('addUser', user._id)
//     socket.current.on('getUsers', (users) => {
//       setOnlineUsers(user.followings.filter((f) => users.some((u) => u.userId === f)));
//     })
//   }, [user])


//   const handleSend = async (e) => {
//     e.preventDefault()
//     const message = {
//       sender: user._id,
//       text: newMessage,
//       conversationId: currentChat._id
//     }

//     const receiverId = currentChat.members.find((member) => member !== user._id)

//     socket.current.emit("sendMessage", {
//       senderId: user._id,
//       receiverId,
//       text: newMessage
//     })

//     try {
//       const res = await axios.post(`/chat/message`, message)
//       setMessages([...messages, res.data])
//       setNewMessage("")
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     scrollRef.current?.scrollIntoView({ behaviour: "smooth" })
//   }, [messages])


//   const handleChange = (newMessage) => {
//     console.log(newMessage);
//     setNewMessage(newMessage)
//   }
//   const fetchUsers = async () => {
//     setShowModal(true)
//     const allUsers = await axios.get(`/admin/users`)
//     if (allUsers) {
//       setUsers(allUsers.data)
//     } else {
//       console.log('error');
//     }
//   }

//   const startChat = async (receiverId) => {
//     const res = await axios.post('http://localhost:5000/chat', { senderId: user._id, receiverId: receiverId })
//     if (res) {
//       window.location.reload()
//     }
//   }



//   return (
//     <div>
//       <Navbar />
//       <div className='messenger'>
//         <div className='lg chatMenu' >
//           <div className='chatMenuWrapper'>
//             <input placeholder='Serach for friends' className='chatMenuInput' />
//             {conversations.map((c) => (
//               <div onClick={() => setCurrentChat(c)}>
//                 <Conversation conversation={c} currentUser={user} />
//               </div>
//             ))}

//           </div>
//           <span className='text-gray-400'> Click here to start new chat </span>
//           <button className='rounded-full  bg-purple-600 px-3 py-1 text-white  text-2xl' value={showModal} onClick={fetchUsers}>+</button>
//         </div>
//         <div className='chatBox'>
//           <div className='chatBoxWrapper'>
//             {
//               currentChat ?
//                 <>
//                   {messages.length !== 0 ?
//                     <div className='chatBoxTop'>
//                       {messages.map((m) => (
//                         <div ref={scrollRef}>
//                           <Message message={m} own={m.sender === user._id} />
//                         </div>
//                       ))}

//                     </div> : <div>Oops there is no messages...</div>
//                   }

//                   <div className='chatBoxBottom'>
//                     <InputEmoji
//                       placeholder='Message'
//                       class='block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700'
//                       value={newMessage}
//                       onChange={handleChange}
//                     />
//                     {/* <textarea className='chatMessageInput' placeholder='write something...' value={newMessage}
//                     onChange={(e)=>setNewMessage(e.target.value)}
//                      ></textarea> */}
//                     {newMessage !== '' ? <button className='chatSubmitButton' onClick={handleSend}>Send</button> : null}

//                   </div>
//                 </> : <div className='noConversationText'>Open new conversation to show the messages...</div>
//             }

//           </div>
//         </div>
//         <div className=' chatOnline'>
//           <div className='chatOnlineWrapper'>
//             <ChatOnline onlineUsers={onlineUsers}
//               currentId={user._id}
//               setCurrentChat={setCurrentChat}
//             />
//           </div>
//         </div>
//       </div>


//       {showModal ? (
//         <>
//           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">

//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
//                 <div className="flex  justify-between p-5 border-b border-solid border-slate-200 rounded-t flex-col">
//                   <h6 className="text-xl font-semibold">Choose one to start new conversation</h6>
//                   {users.map((obj) => (
//                     <div className='flex flex-col  justify-between'>
//                       {console.log(conversations, 'dddddddddddddddddddd')}
//                       {obj.username !== user.username &&
//                         <div className="relative p-6 flex  justify-between">
//                           <img class="w-12 h-12 rounded-full bg-gray-100" src='/assets/avatar.jpg'></img>
//                           {selected ? <div className='p-3 text-green-500' onClick={() => setSelected(!selected)}>{obj.username}
//                           </div> :
//                             <div className='py-3 mr-28' onClick={() => setSelected(!selected)}>{obj.username}
//                             </div>
//                           }
//                           <div>
//                             <button
//                               className="bg-blue-500 text-white active:bg-emerald-600   text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                               type="button"
//                               onClick={() => startChat(obj._id)}
//                             >
//                               Start Chat
//                             </button>
//                           </div>
//                         </div>
//                       }


//                     </div>
//                   ))}
//                   <button
//                     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                       ×
//                     </span>
//                   </button>
//                 </div>
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>

//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}

//     </div>
//   )
// }

// export default Chat

