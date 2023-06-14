import React from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { Typography, Box, Tabs, Tab, Button } from "@mui/material";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function handleLogout() {
    fetch("logout", {
      method: "DELETE",
    }).then(dispatch(logout()));
    navigate('/donations');
  }

  return (
    <div id="navbar">
      {/* <h1>THIS IS THE NAVBAR</h1>
      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/donations")}>Donations</button>
      { user ? <button onClick={() => navigate("/posts")}>New Post</button> : null }
      { user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      ) }

      { user ? <button onClick={() => navigate("/messages")}>Messages</button> : null }
      { user ? <button onClick={() => navigate(`/profile/${user.id}`)}>My Profile</button> : null } */}


      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} onClick={() => navigate("/home")}/>
          <Tab label="Donations" {...a11yProps(1)} onClick={() => navigate("/donations")}/>
          { user ? <Tab label="Messages" {...a11yProps(2)} onClick={() => navigate("/messages")}/> : null }
          { user ? <Tab label="Make a New Post" {...a11yProps(3)} onClick={() => navigate("/posts")}/> : null }
          { user ? <Tab label="My Profile" {...a11yProps(4)} onClick={() => navigate(`/profile/${user.id}`)}/> : null }
        </Tabs>
      </Box>
      {user ? <Typography variant="h5" id="welcome-message" >Welcome, {user.username}!</Typography > : null }
      { user ? (
        <Button onClick={handleLogout} variant="outlined" color="secondary">Logout</Button>
      ) : (
        <Button onClick={() => navigate("/login")} variant="outlined" color="secondary">Login</Button>
      ) }
    </div>
  );
}

export default NavBar;
