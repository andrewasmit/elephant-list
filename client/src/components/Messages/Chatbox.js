import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../../redux/userSlice";

function Chatbox({ user1_id, user2_id, chatroom_id }) {
  const [message, setMessage] = useState("");
  const { user } = useSelector(state=>state.user)
  const dispatch = useDispatch();

  function handleSendMessage(e){
    e.preventDefault();
    const newMessage = {
        body: message, 
        user_id: user.id, 
        chatroom_id: chatroom_id,
        recipient_id: user1_id === user.id ? user2_id : user1_id
    }
    fetch('/messages',{
        method: "POST",
        body: JSON.stringify(newMessage),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>dispatch(addMessage(data)))
    setMessage("");
  }

  return (
    <div id="chatbox">
      <h1>This is the chatbox</h1>
      <form onSubmit={handleSendMessage}>
        <label>
          {" "}
          Text:
          <input type="text" name="title" value={message} onChange={e=>setMessage(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Chatbox;
