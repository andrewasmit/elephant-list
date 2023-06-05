import React from 'react'
import './SidebarMessages.css'
import { useNavigate } from "react-router-dom";

function SidebarMessages(props) {
  const navigate = useNavigate();

  function handleChatClick(){
    props.setTargetChat(props.chatroom_id)  
    navigate(`/messages/${props.chatroom_id}`)
  }
  return (
    <div id="sidebar-messages">
        <h3>This should be on the side</h3>
        <button onClick={handleChatClick}>Go to this chatroom</button>
    </div>
  )
}

export default SidebarMessages