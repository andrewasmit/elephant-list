import React, { useEffect, useState } from "react";
import Message from "./Message";
import Chatbox from "./Chatbox";
import { useSelector, useDispatch } from "react-redux";
import Popup from "../Popup/Popup";
import { addDonationToPost } from "../../redux/postSlice";
import { Box, Toolbar, Typography, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Chatroom(props) {
  const { targetUsername } = useSelector(state=>state.chatroom);
  const { user } = useSelector(state=>state.user);
  const [donateSelect, setDonateSelect] = useState("**Select an Item to Donate**");
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();


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
        username={targetUsername}
      />
    );
  });

  const postOptions = props.user.posts.map(p=>{
    if(p.donation_id ===null) {
      return <MenuItem value={p.id}>{p.title}</MenuItem>
    } else
    return
  });


  function submitForm(e){
    e.preventDefault();
    setPopup(true);
  }


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
    .then(data=>dispatch(addDonationToPost(data)))
  }


  const confirmPopup= {
    title: "Are you sure you want to donate the selected item?",
    buttons: [
      <Button onClick={handleDonateItem} variant="contained">Yes, Donate!</Button>,
      <Button onClick={()=>setPopup(false)}variant="outlined">Whoops! No, I do not want to donate this item</Button>
    ]
  }


  // Return of JSX
  return (
    <div>
      <div className="chatroom">
      <Typography variant="h4">Your conversation with {targetUsername}</Typography>
      <Typography variant="h6">Donate one of your items to this user</Typography>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={submitForm}
        >
          <FormControl sx={{ m: 1, minWidth: 350 }}>
            <InputLabel id="demo-simple-select-label">Item to Donate</InputLabel>
            <Select
              value={donateSelect}
              label="Item to Donate"
              onChange={e=>setDonateSelect(e.target.value)}
            >
              {postOptions}
            </Select>
          </FormControl>
          <Button variant="outlined" type="submit" sx={{ m: 2 }} >Send Donation</Button>
        </Box>

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
