import React from 'react'
import './message.css'
import { useSelector } from 'react-redux'

function Message(props) {
    const { user } = useSelector(state=>state.user)

  return (
    <div className={props.user_id == user.id ? 'message-sent' : 'message-received'}>
        <h4>Author: User{props.user_id}</h4>
        <p>{props.body}</p>
    </div>
  )
}

export default Message