import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { Typography, Box, Tabs, Tab, Button } from "@mui/material";
import {clearErrors} from "../redux/errorSlice";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    dispatch(clearErrors())
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function handleLogout() {
    fetch("logout", {
      method: "DELETE",
    }).then(dispatch(logout()));
    handleNavigate("/donations");
  }

  function handleNavigate(url){
    dispatch(clearErrors());
    navigate(url);
  }

  return (
    <div id="navbar">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Home"
            {...a11yProps(0)}
            onClick={() => navigate("/home")}
          />
          <Tab
            label="Donations"
            {...a11yProps(1)}
            onClick={() => navigate("/donations")}
          />
          {user ? (
            <Tab
              label="Messages"
              {...a11yProps(2)}
              onClick={() => navigate("/messages")}
            />
          ) : null}
          {user ? (
            <Tab
              label="My Profile"
              {...a11yProps(3)}
              onClick={() => navigate(`/profile/${user.id}`)}
            />
          ) : null}

          {user ? (
            <Button
              onClick={handleLogout}
              variant="outlined"
              sx={{ m: 3, bgcolor: "white" }}
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={()=>handleNavigate('/login')}
              variant="outlined"
              sx={{ m: 3, bgcolor: "white" }}
            >
              Login
            </Button>
          )}
        </Tabs>
        <br></br>
        {user ? (
          <Typography variant="h5" id="welcome-message" className="welcome-nav">
            Welcome, {user.username}!
          </Typography>
        ) : null}
      </Box>
    </div>
  );
}

export default NavBar;
