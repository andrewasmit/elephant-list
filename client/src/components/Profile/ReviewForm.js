import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addErrors, clearErrors } from "../../redux/errorSlice";
import { createReview } from "../../redux/userSlice";
import { Typography, Button, Rating, Box, TextField } from "@mui/material";

function ReviewForm(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { errors } = useSelector((state) => state.errors);
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(0);

  const errorsToDisplay = errors.map((err, idx) => {
    return (
      <li key={idx} className="error-list-item">
        {err}
      </li>
    );
  });

  function handleSubmitReview(e) {
    e.preventDefault();
    dispatch(clearErrors());
    const review = {
      body: body,
      rating: rating,
      user_id: user.id,
      reviewed_id: props.reviewed_id,
      donation_id: props.donation_id,
    };

    console.log("Before Fetch: ", review);

    // Fetch to create new review
    fetch("/reviews", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => dispatch(createReview(data)));
        clearReview();
      } else
        res.json().then((data) => {
          data.errors.map((err) => dispatch(addErrors(err)));
        });
    });
  }

  function clearReview() {
    setBody("");
    setRating("**Choose Rating**");
    props.setWriteReview(false);
    dispatch(clearErrors());
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmitReview}
      >
        <TextField
          id="outlined-required"
          multiline
          rows={3}
          label="Review"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <Typography component="legend">Rating</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <br></br>
        <Button variant="contained" type="submit">
          Submit Review for {props.reviewUsername}
        </Button>
      </Box>
      {errorsToDisplay}
      <Button variant="text" onClick={() => clearReview()}>
        Discard Review
      </Button>
    </div>
  );
}

export default ReviewForm;
