import React from 'react'
import './Popup.css'

function Popup(props) {

  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <h3>{props.popupMessage.title}</h3>
            {props.popupMessage.buttons}
            <button className='close-popup-btn' onClick={()=>props.setPopupTrigger(false)}>Close</button>
        </div>
    </div>
  ) : "";
};

export default Popup