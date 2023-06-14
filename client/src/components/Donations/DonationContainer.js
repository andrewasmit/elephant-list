import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Donation from './Donation'
import { Box,
  TextField,
  Fab,
  Typography,
  Button,
  Grid
} from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

function DonationContainer() {
    const { posts } = useSelector(state=>state.posts)
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    const postsToDisplay= posts.filter(post=>post.title.toLowerCase().includes(filter.toLowerCase()))
    .map(post=>{
        return <Grid item md={12} lg={6} xl={4} key={post.id}> 
                  <Donation 
                    title= {post.title}
                    description={post.description} 
                    zipcode={post.zipcode} 
                    image_url={post.image_url} 
                    user_id={post.user_id}
                    id={post.id} 
                    donation_id={post.donation_id}
                  />
                </Grid>
    })


    function handleSearch(e){
      e.preventDefault();
      setFilter(e.target[0].value)
    }

    function resetSearch(){
      setFilter("");
      setSearch("");
    }

  return (
    <div>
        <Typography variant="h4" component="h3">THIS IS WHERE TO DISPLAY ALL DONATIONS</Typography >
        {/* <form onSubmit={handleSearch}>
          <label>
            Search:
            <input type="text"  value={search}  onChange={e=>setSearch(e.target.value)}/>
          </label>
          <input type="submit"></input>
        </form>
        { filter === "" ? null : <button onClick={()=>resetSearch()}>Show All Posts</button> } */}


        <Grid container spacing={2} id="search-bar">
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
                label="Search"
                value={search}  
                onChange={e=>setSearch(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Fab variant="extended" type="submit">
                <NavigationIcon sx={{ mr: .5 }} />
                Search
              </Fab>
            </Grid>
          
           
          <Grid item xs={12}>
          { filter === "" ? null :
            <Button variant="text" onClick={() => resetSearch()}>
              Show all posts
            </Button> }
          </Grid>
          </Box>
        </Grid>
        

        <Grid container spacing={2} >
          {postsToDisplay}
        </Grid>
        
    </div>
  )
}

export default DonationContainer