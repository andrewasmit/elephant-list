import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chatroom from "./Chatroom";

function MessageHome() {
  const { user } = useSelector((state) => state.user);

  const chatrooms = user.all_chatrooms.map((chat, idx) => {
    return <Chatroom key={idx} arr={chat} />;
  });

  console.log(user.all_chatrooms)

  return (
    <div>
      <h2>This is the Messages HomePage</h2>
      <h4>Here, you will house all your chatrooms</h4>
      {chatrooms}
    </div>
  );
}

export default MessageHome;
