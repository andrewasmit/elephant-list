import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../../redux/userSlice";
import { Box, TextField, Button, Typography } from "@mui/material";

function Chatbox({ user1_id, user2_id, chatroom_id }) {
  const { user, chatrooms } = useSelector(state=>state.user)
  const [message, setMessage] = useState("")
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
      <Typography variant="h3">Chatbox</Typography >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "75ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSendMessage}
      >
        <TextField
          required
          label="Message"
          multiline
          rows={2}
          value={message} 
          onChange={e=>setMessage(e.target.value)}
          sx={{ bgcolor: "white"  }}
        />
        <Button 
          variant="outlined" 
          type="submit" 
          sx={{ m: 4 , bgcolor: "white" }} >
            Send
        </Button>
      </Box>
    </div>
  );
}

export default Chatbox;
