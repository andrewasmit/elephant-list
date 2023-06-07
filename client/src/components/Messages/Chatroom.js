import React from "react";
import Message from "./Message";
import Chatbox from "./Chatbox";
import { useSelector } from "react-redux";

function Chatroom(props) {
  const { targetUsername } = useSelector(state=>state.chatroom)

  const messagesToDisplay = props.arr.map((msg) => {
    return (
      <Message
        key={msg.id}
        id={msg.id}
        read={msg.read}
        body={msg.body}
        user_id={msg.user_id}
        chatroom_id={msg.chatroom_id}
      />
    );
  });

  return (
    <div>
      <div className="chatroom">
        <h2>Your conversation with {targetUsername}</h2>
        {messagesToDisplay}
      </div>
      <Chatbox
        user1_id={props.arr[0].user_id}
        user2_id={props.arr[0].recipient_id}
        chatroom_id={props.arr[0].chatroom_id}
      />
    </div>
  );
}

export default Chatroom;
