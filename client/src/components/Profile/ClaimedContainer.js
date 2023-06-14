import React from "react";
import ClaimedDonation from "./ClaimedDonation";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";

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

  return (
    <div>
      <Typography variant="h4">Your claimed Donations</Typography>
      <Grid container >
        {claimedDonations}
      </Grid>
    </div>
  );
}

export default ClaimedContainer;
