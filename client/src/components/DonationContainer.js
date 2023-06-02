import React from 'react'
import { useSelector } from 'react-redux'
import Donation from './Donation'

function DonationContainer() {
    const { posts } = useSelector(state=>state.posts)

    const postsToDisplay= posts.map(post=>{
        return <Donation 
                    title= {post.title}
                    description={post.description} 
                    zipcode={post.zipcode} 
                    image_url={post.image_url} 
                    key={post.id} 
                    user_id={post.user_id}
                    id={post.id} 
                />
    })

  return (
    <div>
        <h1>THIS IS WHERE TO DISPLAY ALL DONATIONS</h1>
        {postsToDisplay}
    </div>
  )
}

export default DonationContainer