import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Donation from './Donation'

function DonationContainer() {
    const { posts } = useSelector(state=>state.posts)
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    const postsToDisplay= posts.filter(post=>post.title.toLowerCase().includes(filter.toLowerCase()))
    .map(post=>{
        return <Donation 
                    title= {post.title}
                    description={post.description} 
                    zipcode={post.zipcode} 
                    image_url={post.image_url} 
                    key={post.id} 
                    user_id={post.user_id}
                    id={post.id} 
                    donation_id={post.donation_id}
                />
    })

    console.log(posts)

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
        <h1>THIS IS WHERE TO DISPLAY ALL DONATIONS</h1>
        <form onSubmit={handleSearch}>
          <label>
            Search:
            <input type="text"  value={search}  onChange={e=>setSearch(e.target.value)}/>
          </label>
          <input type="submit"></input>
        </form>
        { filter ==="" ? null : <button onClick={()=>resetSearch()}>Show All Posts</button> }
        {postsToDisplay}
    </div>
  )
}

export default DonationContainer