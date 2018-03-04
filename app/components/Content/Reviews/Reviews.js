import React from 'react'

import ReviewsBody from './ReviewsBody/ReviewsBody'

export default class Reviews extends React.Component {
  render() {
    return(
      <div className='reviews'>
        <div className='reviews-header'>
          <div className='reviews-header-title'>
            <h1>Отзывы пользователей нашего сервиса</h1>
          </div>
          <div className='reviews-header-description'>
            <p>Если у Вас есть пожелания или замечания к нашим услугам, мы будем рады, если Вы оставите свой отзыв.</p>
            <p>Ваше мнение по работе нашего обменника важно для нас.</p>
          </div>
        </div>
        <ReviewsBody/>
      </div>
    )
  }
}