import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chatroom from "./Chatroom";
import SidebarMessages from "./SidebarMessages";

function MessageHome() {
  const { user } = useSelector((state) => state.user);
  const [targetChat, setTargetChat] = useState(0);

  const chatSideIcons = user.all_chatrooms.map((chat, idx) => {
    return (
      <SidebarMessages
        key={idx}
        arr={chat}
        setTargetChat={setTargetChat}
        chatroom_id={chat[0].chatroom_id}
      />
    );
  });

  const chatroomToDisplay = user.all_chatrooms
    .filter((chat) => chat[0].chatroom_id === targetChat)
    .map((chatroom) => {
      return <Chatroom arr={chatroom} chatroom_id={targetChat} />
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
