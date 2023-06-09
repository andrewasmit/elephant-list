import React, { useState } from 'react'

function ReviewForm() {
    const [body, setBody] = useState("")
    const [rating, setRating] = useState("**Choose Rating**")

    function handleSubmitReview(e){
        e.preventDefault();
        setBody("");
        setRating("**Choose Rating**")
        console.log(body)
    }


  return (
    <div>
        <h3>Write a review for your most recently acquired donation</h3>
        <form onSubmit={handleSubmitReview}>
            <label>
                Review: 
                <input type="text" value={body} onChange={e=>setBody(e.target.value)}/>
            </label>
            <select value ={rating} onChange={e=>setRating(e.target.value)}>
                <option value={"**Choose Rating**"} disabled>**Choose Rating**</option>
                <option value={1}>1 - ⭐</option>
                <option value={2}>2 - ⭐⭐</option>
                <option value={3}>3 - ⭐⭐⭐</option>
                <option value={4}>4 - ⭐⭐⭐⭐</option>
                <option value={5}>5 - ⭐⭐⭐⭐⭐</option>
            </select>
            <input type="submit" />
        </form>
    </div>
  )
}

export default ReviewForm