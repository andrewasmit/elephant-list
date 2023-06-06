import React from 'react'
import './Popup.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors } from '../../redux/errorSlice'

function Popup(props) {
  const dispatch = useDispatch();
  const { errors } = useSelector(state=>state.errors)
  const errorsToDisplay = errors.map((err, idx)=>{
    return <li key={idx} className="error-list-item">{err}</li>
  })

  function handleClosePopUp(){
    dispatch(clearErrors());
    props.setPopupTrigger(false)
  }

  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <h3>{props.popupMessage.title}</h3>
            {props.popupMessage.buttons}
            <button className='close-popup-btn' onClick={handleClosePopUp}>Close</button>
            {errorsToDisplay}
        </div>
    </div>
  ) : "";
};

export default Popup