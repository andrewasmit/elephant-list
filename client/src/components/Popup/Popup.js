import React from "react";
import "./Popup.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../../redux/errorSlice";
import { Typography } from "@mui/material";

function Popup(props) {
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.errors);
  const errorsToDisplay = errors.map((err, idx) => {
    return (
      <li key={idx} className="error-list-item">
        {err}
      </li>
    );
  });

  function handleClosePopUp() {
    dispatch(clearErrors());
    props.setPopupTrigger(false);
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <Typography variant="h5">{props.popupMessage.title}</Typography>
        {props.popupMessage.buttons}
        <button className="close-popup-btn" onClick={handleClosePopUp}>
          Close
        </button>
        {errorsToDisplay}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
