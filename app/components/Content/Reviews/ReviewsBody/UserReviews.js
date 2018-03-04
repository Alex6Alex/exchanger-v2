import React from 'react'

import UserReview from './UserReview'

export default class UserReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [
        {
          author: 'Андрей',
          date: '03 Март 2018, 12:56',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam architecto asperiores assumenda culpa distinctio'
        },
        {
          author: 'Александр',
          date: '03 Март 2018, 12:46',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          author: 'Егор',
          date: '03 Март 2018, 12:36',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam architecto asperiores assumenda culpa distinctio dolores facere id in iste minima nobis odit officiis placeat quas quia repudiandae saepe, veniam!'
        },
        {
          author: 'Виктор',
          date: '03 Март 2018, 12:26',
          text: 'Lorem ipsum dolor sit amet, consectetur'
        },
        {
          author: 'Андрей',
          date: '03 Март 2018, 12:26',
          text: 'Lorem ipsum dolor sit amet'
        },
        {
          author: 'Андрей',
          date: '03 Март 2018, 11:46',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam architecto asperiores assumenda culpa'
        },
        {
          author: 'Андрей',
          date: '03 Март 2018, 11:11',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
        },
        {
          author: 'Андрей',
          date: '03 Март 2018, 10:50',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam architecto asperiores assumenda culpa distinctio'
        },
      ]
    }
  }

  showReviews() {
    return this.state.reviews.map((review, index) => (
      <UserReview key={index} author={review.author} date={review.date} text={review.text}/>
    ))
  }

  render() {
    return(
      <div className='user-reviews'>
        <div className='user-reviews-title'>
          <h2>Отзывы других пользователей</h2>
        </div>
        <div className='user-reviews-list'>
          {this.showReviews()}
        </div>
      </div>
    )
  }
}