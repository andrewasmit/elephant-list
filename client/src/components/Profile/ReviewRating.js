import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Review from './Review'

function ReviewRating() {
    const { user } = useSelector(state=>state.user)
    const [averageRating, setAverageRating] = useState(0)

    function findAverageRating(arr){
        const reviewRatings = arr.map(review=>review.rating)
        if (reviewRatings.length > 0){
            const sum = reviewRatings.reduce((initial, accum)=> initial + accum, 0 )
            return Math.floor(sum/arr.length)
        } else {
            return 0;
        }
    };

    useEffect(()=>{
        setAverageRating(findAverageRating(user.reviews));
    },[])

   const stars = [...Array(averageRating)].map( ()=> "⭐" ).join("")
    
    const reviewsToDisplay = user.reviews.map(review=>{
        return <Review 
                    key={review.id}
                    body ={review.body} 
                    authorId={review.user_id}
                    rating={review.rating}
               />
    })

  return (
    <div>
        <h2>{user.username}</h2>
        { user.reviews.length === 0 ? <h3>This account has not yet been reviewed</h3> :
        <h3>Average Rating: {averageRating}/5 {stars} out of {user.reviews.length} reviews</h3> }
        <h3>Reviews</h3>
        {reviewsToDisplay}
    </div>
  )
};

export default ReviewRating