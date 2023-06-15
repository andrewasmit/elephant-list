import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Review from './Review'
import { Grid, Rating, Typography } from '@mui/material'

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
        <Typography variant="h3" >{user.username}</Typography >
        { user.reviews.length === 0 ? <Typography variant="h5" >This account has not yet been reviewed</Typography > :
        <div className='rating-block'> 
            <Typography variant="h5">Average Rating (out of {user.reviews.length} reviews): </Typography > 
            <Rating name="read-only" value={averageRating} readOnly />
        </div> }

        <Typography variant="h5">My Reviews</Typography >
        <Grid container >
            {reviewsToDisplay}
        </Grid>
    </div>
  )
};

export default ReviewRating