import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Paper, Grid, Typography, Rating, Collapse } from '@mui/material'

function Review({ body, authorId, rating}) {
    const { allUsers } = useSelector(state=>state.user)
    const [showHide, setShowHide] = useState(false)

    const author = allUsers.filter(u=> u.id === authorId)[0].username

    function handleShowHide(){
        setShowHide(!showHide);
    }

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper elevation={8} className="review-card">
        <Rating name="read-only" value={rating} readOnly />
        <Typography variant="h6">- {author}</Typography>
        <Collapse in={showHide}>
          <Typography variant="p">{body}</Typography>
        </Collapse>
          <Button onClick={handleShowHide} variant="outlined" >{ showHide ? "Hide Review" : "See full review" }</Button> 
      </Paper>
    </Grid>
  )
}

export default Review