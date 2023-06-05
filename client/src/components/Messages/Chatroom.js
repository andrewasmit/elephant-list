import React from 'react'
import Message from './Message'
import { useSelector } from 'react-redux'

function Chatroom(props) {

  console.log(props.arr)
  // const { user } =useSelector(state=>state.user)
  const messagesToDisplay = props.arr.map(msg=>{
    return <Message 
              key={msg.id}
              id={msg.id}
              read={msg.read}
              body={msg.body}
              user_id={msg.user_id}
          />
  })

  return (
    <div>
        <h2>This is a chatroom that will be filled with messages</h2>
        {messagesToDisplay}
    </div>
  )
}

export default Chatroom