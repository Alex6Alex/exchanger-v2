import React from 'react'

import NewReview from './NewReview'
import UserReviews from './UserReviews'

export default class ReviewsBody extends React.Component {
  render() {
    return(
      <div className='reviews-body'>
        <UserReviews/>
        <NewReview/>
      </div>
    )
  }
}