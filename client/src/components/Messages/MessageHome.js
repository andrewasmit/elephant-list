import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chatroom from "./Chatroom";
import SidebarMessages from "./SidebarMessages";
import { fetchAllUsers } from "../../redux/userSlice";

function MessageHome() {
  const { chatrooms } = useSelector((state) => state.user);
  const { targetChat } = useSelector((state) => state.chatroom);
  const dispatch = useDispatch();

  useEffect(()=>{
    fetch('/users')
    .then(res=>res.json())
    .then(userArray=>dispatch(fetchAllUsers(userArray)))
  },[])

  const chatSideIcons = chatrooms.map((chat, idx) => {
    return (
      <SidebarMessages
        key={idx}
        arr={chat}
        chatroom_id={chat[0].chatroom_id}
      />
    );
  });

  const chatroomToDisplay = chatrooms
    .filter((chat) => chat[0].chatroom_id === targetChat)
    .map((chatroom, idx) => {
      return <Chatroom arr={chatroom} chatroom_id={targetChat} key={idx} />
    });

  return (
    <div>
      {chatSideIcons}
      {chatroomToDisplay}
    </div>
  );
}

export default MessageHome;
