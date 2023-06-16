import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../Popup/Popup";
import "./donation.css";
import { useNavigate } from "react-router-dom";
import { addErrors, clearErrors } from "../../redux/errorSlice";
import { addTargetChat } from "../../redux/chatroomSlice";
import { startChatroom } from "../../redux/userSlice";
import {
  Paper,
  Typography,
  Grid,
  Button,
  ImageList,
  ImageListItem
} from "@mui/material";

function Donation({
  title,
  description,
  zipcode,
  image_url,
  id,
  user_id,
  donation_id,
}) {
  const { user, chatrooms } = useSelector((state) => state.user);
  const targetChat = useSelector((state) => state.chatroom);
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [popupMsg, setPopupMsg] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlePopUp(obj) {
    setPopupTrigger(true);
    setPopupMsg(obj);
  }

  function handleMessageUser() {
    if (user && user.id !== user_id) {
      handlePopUp({
        title: "Message the owner of this post",
        buttons: [
          <form onSubmit={handleSendMessage} key={1}>
            <input type="text" />
            <input type="submit" />
          </form>
        ],
      });
    } else if (user && user.id === user_id) {
      handlePopUp({
        title: "You are the owner of this post.",
      });
    } else
      handlePopUp({
        title: "You must be signed in to message post owners",
        buttons: [
          <Button
            onClick={() => navigate("/login")}
            key={1}
            variant="contained"
          >
            Login to my account
          </Button>,
          <Button
            onClick={() => navigate("/signup")}
            key={2}
            variant="outlined"
          >
            No account yet? Signup!
          </Button>,
        ],
      });
  }

  function handleSendMessage(e) {
    e.preventDefault();
    const msg = {
      body: e.target[0].value,
      user_id: user.id,
      recipient_id: user_id,
    };
    fetch(`/chatrooms`, {
      method: "POST",
      body: JSON.stringify(msg),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          dispatch(startChatroom(data));
          dispatch(addTargetChat(data[0].chatroom_id));
          navigate(`/messages/${data[0].chatroom_id}`);
        });
      } else
        res.json().then((data) => {
          const targetChatroom = chatrooms.filter(
            (chatroom) =>
              chatroom[0].recipient_id === user_id ||
              chatroom[0].user_id === user_id
          )[0];
          dispatch(addTargetChat(targetChatroom[0].chatroom_id));
          dispatch(addErrors(data.error));
          setTimeout(() => {
            dispatch(clearErrors());
            navigate(`/messages/${targetChat}`);
          }, 1500);
        });
    });
  }

  return (
    <Paper elevation={12} className="donation-card">
      <Grid item xs={12} md={6} lg={12} id={id}>
        <div className={donation_id === null ? "" : "donation-claimed"}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="p">{description}</Typography>
          <Typography variant="subtitle1">Zipcode: {zipcode}</Typography>

          {image_url === null ? null : (
            <ImageList
              sx={{ width: 550, height: 450 }}
              cols={image_url.length < 3 ? image_url.length : 3}
              rowHeight={20}
            >
              {image_url.map((img, idx) => (
                <ImageListItem key={idx}>
                  <img src={img} alt={title} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          )}

          {donation_id === null ? (
            <Button onClick={handleMessageUser} variant="outlined">
              I'm interested!
            </Button>
          ) : (
            <h3>This has been donated</h3>
          )}
          <Popup
            trigger={popupTrigger}
            setPopupTrigger={setPopupTrigger}
            popupMessage={popupMsg}
          />
        </div>
      </Grid>
    </Paper>
  );
}

export default Donation;
