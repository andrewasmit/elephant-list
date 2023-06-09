import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Donation from "./Donation";
import { Box, TextField, Fab, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

function DonationContainer() {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const postsToDisplay = posts
    .filter((post) => post.title.toLowerCase().includes(filter.toLowerCase()))
    .map((post) => {
      return (
        <Grid item md={12} lg={6} xl={4} key={post.id}>
          <Donation
            title={post.title}
            description={post.description}
            zipcode={post.zipcode}
            image_url={post.image_url}
            user_id={post.user_id}
            id={post.id}
            donation_id={post.donation_id}
          />
        </Grid>
      );
    });

  function handleSearch(e) {
    e.preventDefault();
    setFilter(e.target[0].value);
  }

  function resetSearch() {
    setFilter("");
    setSearch("");
  }

  return (
    <div>
      <Grid container spacing={2} id="search-bar" className="search-bar">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSearch}
        >
          <Grid item xs={12}>
            <TextField
              id="outlined"
              sx={{ bgcolor: "white" }}
              label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Fab variant="extended" type="submit" sx={{ bgcolor: "white" }}>
              <SearchIcon sx={{ mr: 0.5 }} />
              Search
            </Fab>
          </Grid>

          <Grid item xs={12}>
            {filter === "" ? null : (
              <Button variant="text" onClick={() => resetSearch()}>
                Show all posts
              </Button>
            )}
          </Grid>
        </Box>
      </Grid>

      {user ? (
        <Grid item xs={12}>
          {filter !== "" ? null : (
            <Fab
              variant="extended"
              sx={{ bgcolor: "lightblue" }}
              onClick={() => navigate("/posts")}
            >
              <AddIcon sx={{ mr: 1 }} />
              Make a New Post
            </Fab>
          )}
        </Grid>
      ) : null}

      <Grid container spacing={2}>
        {postsToDisplay}
      </Grid>
    </div>
  );
}

export default DonationContainer;
