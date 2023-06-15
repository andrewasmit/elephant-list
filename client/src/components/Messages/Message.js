import React, { useState } from "react";
import "./message.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteMessage, editMessage } from "../../redux/userSlice";
import { Box, TextField, Button, Typography, ButtonGroup, Paper, Fab } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
    <div className={props.user_id === user.id ? "message-sent" : "message-received"} >
    <Paper elevation={2}>

      <div className="message-header">
        <h4 >{props.user_id === user.id ? `${props.username}` : `${user.username}`}</h4>
        { edit === false && props.user_id === user.id ? 
        <div>
          <Fab color="primary" size="small" onClick={()=>setEdit(true)}>
            <EditIcon />
          </Fab>
          <Fab color="primary" size="small" onClick={handleDeleteMessage}>
            <DeleteForeverIcon />
          </Fab>
        </div>
        : null }
      </div>

    {/* Changing to input form if editing message */}
    { edit ? 
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleEditMessage}
      >
        <TextField
          required
          label="Message"
          multiline
          rows={3}
          value={input}
          onChange={(e) =>setInput(e.target.value)}
        />
        <Button variant="outlined" type="submit">Submit</Button>
      </Box>        
      <Button variant="text" onClick={resetEdit}>Discard Edit Message</Button>
    </div>
      : <Typography variant="h6">{props.body}</Typography>  }
    </Paper>
    </div>
  );
}

export default Message;
