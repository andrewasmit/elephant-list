import React from 'react'
import { useSelector } from 'react-redux'
import ReviewRating from './ReviewRating'
import ReviewForm from './ReviewForm'

function Profile() {
  return (
    <div>
        <h1>This is my profile</h1>
        <ReviewForm />
        <ReviewRating />
    </div>
  )
}

export default Profile