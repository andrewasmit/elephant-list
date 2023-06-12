import React from 'react'
import { useSelector } from 'react-redux'
import ReviewRating from './ReviewRating'
import ReviewForm from './ReviewForm'
import ClaimedContainer from './ClaimedContainer'

function Profile() {
  return (
    <div>
        <h1>This is my profile</h1>
        {/* <ReviewForm /> */}
        <ClaimedContainer />
        <ReviewRating />
    </div>
  )
}

export default Profile