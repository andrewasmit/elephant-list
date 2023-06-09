import React, { useEffect, useState } from "react";
import Message from "./Message";
import Chatbox from "./Chatbox";
import { useSelector } from "react-redux";
import Popup from "../Popup/Popup";

function Chatroom(props) {
  const { targetUsername } = useSelector(state=>state.chatroom);
  const { user } = useSelector(state=>state.user);
  const [donateSelect, setDonateSelect] = useState("**Select an Item to Donate**");
  const [popup, setPopup] = useState(false)


  useEffect(()=>{
    setDonateSelect("**Select an Item to Donate**")
  }, [targetUsername])


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


  const postOptions = props.user.posts.map(p=>{
    if(p.donation_id ===null) {
      return <option value={p.id}>{p.title}</option>
    } else
    return
  });


  function submitForm(e){
    e.preventDefault();
    setPopup(true);
  }

  // console.log(props.arr[0])

  function handleDonateItem(){
    console.log("In form: ", donateSelect) 
    setPopup(false);
    const recipient = props.arr[0].user_id === user.id ? props.arr[0].recipient_id : props.arr[0].user_id
    const newDonation = {
      post_id: donateSelect,
      recipient_id: recipient
    }
    fetch(`/donations`,{
      method: "POST",
      body: JSON.stringify(newDonation),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }


  const confirmPopup= {
    title: "Are you sure you want to donate the selected item?",
    buttons: [
      <button onClick={handleDonateItem}>Yes, Donate!</button>,
      <button onClick={()=>setPopup(false)}>Whoops! No, I do not want to donate this item</button>
    ]
  }


  // Return of JSX
  return (
    <div>
      <div className="chatroom">
        <h2>Your conversation with {targetUsername}</h2>
        <h3>INPUT/SELECT TO SEND DONATION TO THIS PERSON</h3>

        <form onSubmit={submitForm}>
          <label>
            Donate item to this user:
            <select value={donateSelect} onChange={e=>setDonateSelect(e.target.value)}>
              <option disabled >**Select an Item to Donate**</option>
              {postOptions}
            </select>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        {messagesToDisplay}
      </div>
      <Popup popupMessage={confirmPopup} trigger={popup} setPopupTrigger={setPopup}/>
      <Chatbox
        user1_id={props.arr[0].user_id}
        user2_id={props.arr[0].recipient_id}
        chatroom_id={props.arr[0].chatroom_id}
      />
    </div>
  );
}

export default Chatroom;
