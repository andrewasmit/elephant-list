import React from 'react'
import { useSelector } from 'react-redux'

function Donation({ title, description, zipcode, image_url, id, user_id }) {

    const { user } = useSelector(state=>state.user)

    function handleMessageUser(){
        console.log("ID of post owner: ", user_id)
    }

  return (
    <div id={id} className='donation-card'>
        <h3>{title}</h3>
        <h5>{description}</h5>
        <h6>Located at: {zipcode}</h6>

        { image_url === null ? null : image_url.map((img, idx)=>{
        return <img src={img} alt="image of post items" className='post-image-card' key={idx}/> 
    })}

        {user_id !==user.id ? <button onClick={handleMessageUser}>Message Post Owner</button> : <h5>This is your post</h5> }
    </div>
  )
};

export default Donation