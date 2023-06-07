import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../Popup/Popup";
import './donation.css'
import { useNavigate } from "react-router-dom";
import { addErrors, clearErrors } from "../../redux/errorSlice";
import { addTargetChat } from "../../redux/chatroomSlice";
import { startChatroom } from "../../redux/userSlice";

function Donation({ title, description, zipcode, image_url, id, user_id, donation_id }) {
  const { user, chatrooms } = useSelector((state) => state.user);
  const targetChat = useSelector(state=>state.chatroom)
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [popupMsg, setPopupMsg] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();


  function handlePopUp(obj) {
    setPopupTrigger(true);
    setPopupMsg(obj);
  }

  function handleMessageUser() {
    if (user && user.id !== user_id) {
      handlePopUp({
        title: "Message the owner of this post",
        buttons: [
          <form onSubmit={handleSendMessage} key={1}>
            <input type="text" />
            <input type="submit" />
          </form>,
        ],
      });
    } else if (user && user.id === user_id) {
      handlePopUp({
        title: "You are the owner of this post.",
      });
    } else
      handlePopUp({
        title: "You must be signed in to message post owners",
        buttons: [
          <button onClick={() => navigate("/login")} key={1}>
            Login to my account
          </button>,
          <button onClick={() => navigate("/signup")} key={2}>
            No account yet? Signup!
          </button>,
        ],
      });
  }

  function handleSendMessage(e) {
    e.preventDefault();
    const msg = {
      body: e.target[0].value,
      user_id: user.id,
      recipient_id: user_id
    }
    fetch(`/chatrooms`,{
      method: "POST",
      body: JSON.stringify(msg),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then((res) => {
      if(res.ok){
          res.json().then((data) => {
            dispatch(startChatroom(data))
            dispatch(addTargetChat(data[0].chatroom_id))
            navigate(`/messages/${data[0].chatroom_id}`)
          });
      } else
      res.json().then(data=>{
        const targetChatroom = chatrooms.filter(chatroom=> chatroom[0].recipient_id === user_id || chatroom[0].user_id === user_id)[0]
        dispatch(addTargetChat(targetChatroom[0].chatroom_id));
          dispatch(addErrors(data.error))
          setTimeout(()=>{
            dispatch(clearErrors());
            navigate(`/messages/${targetChat}`);
          }, 1500);
        })
    });
  }

  return (
    <div id={id} className="donation-card" >
      <div className={ donation_id === null ? "" : "donation-claimed"}>
      <h3>{title}</h3>
      <h5>{description}</h5>
      <h6>Located at: {zipcode}</h6>

      {image_url === null
        ? null
        : image_url.map((img, idx) => {
            return (
              <img
                src={img}
                alt="image of post items"
                className="post-image-card"
                key={idx}
              />
            );
          })}

      { donation_id === null ? 
      <button onClick={handleMessageUser}>I'm interested!</button>
      : <h3>This post has been donated</h3> }
      <Popup
        trigger={popupTrigger}
        setPopupTrigger={setPopupTrigger}
        popupMessage={popupMsg}
      />
      </div>
    </div>
  );
}

export default Donation;
