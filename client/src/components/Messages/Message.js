import React from 'react'
import { useSelector } from 'react-redux'

function Message(props) {
    const { user } = useSelector(state=>state.user)

  return (
    <div className={user_id == user.id ? 'message-sent' : 'message-received'}>
        <p>{props.body}</p>
    </div>
  )
}

export default Message