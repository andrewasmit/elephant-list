import React, { useState } from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import ReviewForm from "./ReviewForm";
import { Paper, Grid, Button, Typography } from "@mui/material";

function ClaimedDonation(props) {
  const { posts } = useSelector((state) => state.posts);
  const { allUsers } = useSelector((state) => state.user);
  const [writeReview, setWriteReview] = useState(false);
  const target = posts.filter((p) => p.id === props.post_id)[0];
  const targetOwner = allUsers.filter((u) => u.id === target.user_id)[0];

  return (
    <Grid item xs={12} md={6} lg={4} className="claimed-donation">
      <Paper elevation={4} className="claimed-donation">
        <Typography variant="h5">{target.title}</Typography>
        <Typography variant="p">{target.description}</Typography>
        {props.review_id === null ? (
          <Button onClick={() => setWriteReview(true)}>
            Write a Review for {targetOwner.username}
          </Button>
        ) : null}

        {writeReview ? (
          <ReviewForm
            reviewed_id={targetOwner.id}
            donation_id={target.donation_id}
            setWriteReview={setWriteReview}
            reviewUsername={targetOwner.username}
          />
        ) : null}
      </Paper>
    </Grid>
  );
}

export default ClaimedDonation;
