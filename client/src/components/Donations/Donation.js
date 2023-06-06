import React, { useState } from "react";
import { useSelector } from "react-redux";
import Popup from "../Popup/Popup";
import { useNavigate } from "react-router-dom";

function Donation({ title, description, zipcode, image_url, id, user_id }) {
  const { user } = useSelector((state) => state.user);
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [popupMsg, setPopupMsg] = useState({});
  const navigate = useNavigate();

  function handleMessageUser() {
    if(user && user.id !== user_id){
      console.log("ID of post owner: ", user_id);
    } else if(user && user.id === user_id){
      // console.log("This is your post dummy butt")
      handlePopUp({
        title: "You are the owner of this post."
      })
    } else
      handlePopUp({
        title: "You must be signed in to message post owners",
        buttons: [
          <button onClick={()=> navigate('/login')} key={1}>Login to my account</button>,
          <button onClick={()=> navigate('/signup')} key={2}>No account yet? Signup!</button>,
        ]
      });
  }


  function handlePopUp(obj){
    setPopupTrigger(true);
    setPopupMsg(obj);
  }

  return (
    <div id={id} className="donation-card">
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

      <button onClick={handleMessageUser}>Message Post Owner</button>
      <Popup trigger={popupTrigger} setPopupTrigger={setPopupTrigger} popupMessage={popupMsg}/>
    </div>
  );
}

export default Donation;
