import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Review({ body, authorId, rating}) {
    const { allUsers } = useSelector(state=>state.user)
    const [showHide, setShowHide] = useState(false)

    const author = allUsers.filter(u=> u.id === authorId)[0].username
    const ratingStars = [...Array(rating)].map( ()=> "⭐" ).join("");

    function handleShowHide(){
        setShowHide(!showHide);
    }

  return (
    <div className="review-card">
        <h4>{rating}/5: {ratingStars}</h4>
        { showHide ? 
        <div>
            <h4>{body}</h4>
            <h5>-{author}</h5>
        </div>
        : null }
        <button onClick={handleShowHide}>{ showHide ? "Hide Review" : "Show More" }</button> 
    </div>
  )
}

export default Review