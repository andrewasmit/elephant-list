import React from 'react'
import { useNavigate } from "react-router-dom";
import { addTargetChat } from '../../redux/chatroomSlice';
import { useDispatch } from 'react-redux';

function SidebarMessages(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChatClick(){
    dispatch(addTargetChat(props.chatroom_id));
    navigate(`/messages/${props.chatroom_id}`);
  }
  return (
    <div className="sidebar-messages">
        <h3>This should be on the side</h3>
        <button onClick={handleChatClick}>Go to this chatroom</button>
    </div>
  )
};

export default SidebarMessages