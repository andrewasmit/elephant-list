import React,{ useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { addTargetChat, addTargetUsername } from '../../redux/chatroomSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Box, CssBaseline, AppBar, Toolbar, Drawer, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { InboxIcon, MailIcon } from '@mui/icons-material';

function SidebarMessages(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state=>state.user)
  const { allUsers } = useSelector(state=>state.user)
  const [recipient, setRecipient] = useState("");
  const drawerWidth = 240;

  // Dynamically rendering the username in each chat
  function handleChatClick(){
    dispatch(addTargetChat(props.chatroom_id));
    if(props.arr[0].user_id === user.id){
      const targetId = props.arr[0].recipient_id
      dispatch(addTargetUsername(allUsers.filter(user=>user.id === targetId)[0].username))
    }else {
      const targetId = props.arr[0].user_id
      dispatch(addTargetUsername(allUsers.filter(user=>user.id === targetId)[0].username))
    }
    navigate(`/messages/${props.chatroom_id}`);
  };

  // Setting the username to each conversation tab
  useEffect(()=>{
    if(props.arr[0].user_id === user.id){
      const targetId = props.arr[0].recipient_id
      setRecipient(allUsers.filter(user=>user.id === targetId)[0].username)
      dispatch(addTargetUsername(allUsers.filter(user=>user.id === targetId)[0].username))
    } else {
      const targetId = props.arr[0].user_id
      setRecipient(allUsers.filter(user=>user.id === targetId)[0].username)
      dispatch(addTargetUsername(allUsers.filter(user=>user.id === targetId)[0].username))
    }
  }, [allUsers]);
  

  

  return (
    // <div className="sidebar-messages">
    //     <Typography variant="h4">{recipient}</Typography>
    //     <button onClick={handleChatClick}>Go to this chatroom</button>
    
    // <Box sx={{ display: 'flex' }}>
    //   <Drawer
    //     sx={{
    //       width: drawerWidth,
    //       flexShrink: 0,
    //       '& .MuiDrawer-paper': {
    //         width: drawerWidth,
    //         boxSizing: 'border-box',
    //       },
    //     }}
    //     variant="permanent"
    //     anchor="left"
    //   >
    //     <Toolbar />
    //     <Divider />
    //     <List>
    //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (

            <ListItem  disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={recipient} onClick={handleChatClick}/>
              </ListItemButton>
            </ListItem>
      //     ))}
      //   </List>
        
      // </Drawer>
      /* <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box> */
    // </Box>
  )
};

export default SidebarMessages;