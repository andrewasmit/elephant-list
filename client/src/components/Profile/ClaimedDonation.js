import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReviewForm from "./ReviewForm";

function ClaimedDonation(props) {
  const { posts } = useSelector((state) => state.posts);
  const { allUsers } = useSelector((state) => state.user);
  const [writeReview, setWriteReview] = useState(false);
  const target = posts.filter((p) => p.id === props.post_id)[0];
  const targetOwner = allUsers.filter((u) => u.id === target.user_id)[0];

  //   console.log(target);

  return (
    <div>
      <h4>{target.title}</h4>
      <p>{target.description}</p>
      {props.review_id === null ? (
        <button onClick={()=>setWriteReview(true)}>Write a Review for {targetOwner.username}</button>
      ) : null}

      {writeReview ? (
        <ReviewForm
          reviewed_id={targetOwner.id}
          donation_id={target.donation_id}
          setWriteReview={setWriteReview}
        />
      ) : null}
    </div>
  );
}

export default ClaimedDonation;
