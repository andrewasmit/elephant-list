import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chatroom from "./Chatroom";
import SidebarMessages from "./SidebarMessages";

function MessageHome() {
  const { user, chatrooms } = useSelector((state) => state.user);
  const [targetChat, setTargetChat] = useState(0);

  const chatSideIcons = chatrooms.map((chat, idx) => {
    return (
      <SidebarMessages
        key={idx}
        arr={chat}
        setTargetChat={setTargetChat}
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
      <h2>This is the Messages HomePage</h2>
      {chatSideIcons}
      {chatroomToDisplay}
    </div>
  );
}

export default MessageHome;
