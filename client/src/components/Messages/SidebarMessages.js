import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addTargetChat, addTargetUsername } from "../../redux/chatroomSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";

function SidebarMessages(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { allUsers } = useSelector((state) => state.user);
  const [recipient, setRecipient] = useState("");

  // Dynamically rendering the username in each chat
  function handleChatClick() {
    dispatch(addTargetChat(props.chatroom_id));
    if (props.arr[0].user_id === user.id) {
      const targetId = props.arr[0].recipient_id;
      dispatch(
        addTargetUsername(
          allUsers.filter((user) => user.id === targetId)[0].username
        )
      );
    } else {
      const targetId = props.arr[0].user_id;
      dispatch(
        addTargetUsername(
          allUsers.filter((user) => user.id === targetId)[0].username
        )
      );
    }
    navigate(`/messages/${props.chatroom_id}`);
  }

  // Setting the username to each conversation tab
  useEffect(() => {
    if (props.arr[0].user_id === user.id) {
      const targetId = props.arr[0].recipient_id;
      setRecipient(allUsers.filter((user) => user.id === targetId)[0].username);
      dispatch(
        addTargetUsername(
          allUsers.filter((user) => user.id === targetId)[0].username
        )
      );
    } else {
      const targetId = props.arr[0].user_id;
      setRecipient(allUsers.filter((user) => user.id === targetId)[0].username);
      dispatch(
        addTargetUsername(
          allUsers.filter((user) => user.id === targetId)[0].username
        )
      );
    }
  }, [allUsers]);

  return (
    <ListItem disablePadding onClick={handleChatClick}>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={recipient} />
      </ListItemButton>
    </ListItem>
  );
}

export default SidebarMessages;
