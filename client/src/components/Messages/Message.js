import React, { useState } from "react";
import "./message.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteMessage, editMessage } from "../../redux/userSlice";

function Message(props) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(props.body);

  function handleEditMessage(e) {
    e.preventDefault();
    fetch(`/messages/${props.id}`,{
      method: "PATCH",
      body: JSON.stringify({body:input}),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>dispatch(editMessage([props.chatroom_id, data])))
    setEdit(false);
  };


  function handleDeleteMessage() {
    fetch(`/messages/${props.id}`, {
      method: "DELETE",
    }).then(dispatch(deleteMessage([props.chatroom_id, props.id])));
  }

  function resetEdit(){
    setEdit(false);
    setInput(props.body);
  }

  return (
    <div
      className={props.user_id == user.id ? "message-sent" : "message-received"}
    >
      {/* Author Tag */}
      <h4>Author: User{props.user_id}</h4>

      {/* Changing to input form if editing message */}
      {edit ? (
        <form onSubmit={handleEditMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={resetEdit}>Discard Edits</button>
          <input type="submit"></input>
        </form>
      ) : (
        <p>{props.body}</p>
      )}

      {/* Edit/Delete buttons IF the signed in user created the message */}
      {/* Conditionally rendering said buttons if user is editing a message */}
      { edit ? null : 
      <div>
        {props.user_id == user.id ? (
          <button onClick={()=>setEdit(true)}>Edit</button>
        ) : null}
        {props.user_id == user.id ? (
          <button onClick={handleDeleteMessage}>Delete</button>
        ) : null}
      </div>
      }
    </div>
  );
}

export default Message;
