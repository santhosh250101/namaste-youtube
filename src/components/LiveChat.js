import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

  const [commentText,setCommentText] = useState("");

  const dispatch = useDispatch();

  const chatSelector = useSelector((store)=>store.chat.messages);

  useEffect(()=>{

    const i = setInterval(()=>{

      dispatch(addMessage({
        name:generateRandomName(),
        message: makeRandomMessage(20)
      }))

    },2000);
    return ()=>{
      clearInterval(i);
    }
  },[])

  const handleClick= (commentText)=>{
    dispatch(addMessage({
      name:"Santhosh",
      message:commentText
    }))
    setCommentText("");
  }

  return (
    <div>
      <div className='w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {
          chatSelector.map((message,index)=>{
            return <ChatMessage key={index} name={message.name} message={message.message}/>
          })
        }
      </div>
      <div className='w-full h-[50px] ml-2 p-2 border border-black bg-slate-100 rounded-lg flex space-x-40'>
        <input type='text' placeholder='Add Message' onChange={(e)=>setCommentText(e.target.value)} value={commentText}/>
        <button onClick={(e)=>handleClick(commentText)}>Send</button>
      </div>
    </div>
  )
}

export default LiveChat