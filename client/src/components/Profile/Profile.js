import React from 'react'
import { useSelector } from 'react-redux'
import ReviewRating from './ReviewRating'

function Profile() {
  return (
    <div>
        <h1>This is my profile</h1>
        <ReviewRating />
    </div>
  )
}

export default Profile