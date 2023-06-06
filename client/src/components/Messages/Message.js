import React from "react";
import "./message.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteMessage } from "../../redux/userSlice";

function Message(props) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleEditMessageClick(){
    props.setMessage(props.body);
    props.setCrudMsgId(props.id)
  }

  function handleDeleteMessageClick(){
    fetch(`/messages/${props.id}`,{
      method: "DELETE"
    }).then(dispatch(deleteMessage([props.chatroom_id, props.id])))
  }

  return (
    <div
      className={props.user_id == user.id ? "message-sent" : "message-received"}
    >
      <h4>Author: User{props.user_id}</h4>
      <p>{props.body}</p>
      {props.user_id == user.id ? (
        <button onClick={handleEditMessageClick}>Edit</button>
      ) : null}
      {props.user_id == user.id ? (
        <button onClick={handleDeleteMessageClick}>Delete</button>
      ) : null}
    </div>
  );
}

export default Message;
