import React from 'react'

function Donation({ title, description, zipcode, image_url, id, user_id }) {

    // const imgsToDisplay = image_url.map(img=>{
    //     return <img src={img} alt="image of post items"/> 
    // })

    function handleMessageUser(){
        console.log("ID of post owner: ", user_id)
    }

  return (
    <div id={id}>
        <h3>{title}</h3>
        <h5>{description}</h5>
        <h6>Located at: {zipcode}</h6>

        { image_url === null ? null : image_url.map(img=>{
        return <img src={img} alt="image of post items" className='post-image-card' /> 
    })}

        <button onClick={handleMessageUser}>Message Post Owner</button>
    </div>
  )
};

export default Donation