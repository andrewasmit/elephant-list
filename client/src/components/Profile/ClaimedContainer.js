import React from "react";
import ClaimedDonation from "./ClaimedDonation";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

function ClaimedContainer() {
  const { user } = useSelector((state) => state.user);

  const claimedDonations = user.donations_claimed.map((d) => {
    return (
      <ClaimedDonation
        key={d.id}
        id={d.id}
        post_id={d.post_id}
        review_id={d.review_id}
      />
    );
  });

//   console.log(claimedDonations)
// console.log(user.donations_claimed)

  return (
    <div>
      <h2>This is where you will display your claimed Donations</h2>
      <Grid container >
        {claimedDonations}
      </Grid>
    </div>
  );
}

export default ClaimedContainer;
