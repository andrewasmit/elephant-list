import React from "react";
import { useSelector } from "react-redux";
import Chatroom from "./Chatroom";
import SidebarMessages from "./SidebarMessages";
import {
  Box,
  Toolbar,
  Drawer,
  Divider,
  List,
  ListItemText,
} from "@mui/material";

function MessageHome() {
  const { chatrooms, user } = useSelector((state) => state.user);
  const { targetChat } = useSelector((state) => state.chatroom);
  const drawerWidth = 240;

  // console.log(user)

  const chatSideIcons = chatrooms.map((chat, idx) => {
    return (
      <SidebarMessages key={idx} arr={chat} chatroom_id={chat[0].chatroom_id} />
    );
  });

  const chatroomToDisplay = chatrooms
    .filter((chat) => chat[0].chatroom_id === targetChat)
    .map((chatroom, idx) => {
      return (
        <Chatroom
          arr={chatroom}
          user={user}
          chatroom_id={targetChat}
          key={idx}
        />
      );
    });

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItemText primary={"All Chatrooms"} />
            {chatSideIcons}
          </List>
        </Drawer>
        {chatroomToDisplay}
      </Box>
    </div>
  );
}

export default MessageHome;
