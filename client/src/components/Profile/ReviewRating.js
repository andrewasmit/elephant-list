import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function ReviewRating() {
    const { user } = useSelector(state=>state.user)
    const [averageRating, setAverageRating] = useState(findAverageRating(user.reviews))

    function findAverageRating(arr){
        const reviewRatings = arr.map(review=>review.rating)
        const sum = reviewRatings.reduce((initial, accum)=> initial + accum, 0 )
        const avg = Math.floor(sum/arr.length)
        return avg;
    };

    const reviewStars = [...Array(averageRating)].map( ()=> "⭐" ).join("");


  return (
    <div>
        <h2>{user.username}'s Rating: {reviewStars}</h2>
        <h3>THIS IS WHERE MY REVIEWS WOULD GO</h3>
    </div>
  )
};

export default ReviewRating