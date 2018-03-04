import React from 'react'

export default class UserReview extends React.Component {
  render() {
    return(
      <div className='user-review'>
        <p className='review-title'>{this.props.date}. {this.props.author}:</p>
        <p className='review-text'>{this.props.text}</p>
      </div>
    )
  }
}