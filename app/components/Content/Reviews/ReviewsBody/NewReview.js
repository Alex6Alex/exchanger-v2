import React from 'react'

export default class NewReview extends React.Component {
  render() {
    return(
      <div className='your-review'>
        <div className='your-review-title'>
          <h2>Добавить свой отзыв</h2>
        </div>
        <div className='your-review-info'>
          <div className='your-name'>
            <p>Имя:</p>
            <input type='text' placeholder='Введите Ваше имя'/>
          </div>
          <div className='your-text'>
            <p>Отзыв:</p>
            <textarea placeholder='Ваш отзыв'></textarea>
          </div>
          <div className='g-recaptcha' data-sitekey='6Lc-U0oUAAAAAA4TxSeGH6cDcgniHRRlAqhqcXM6'></div>
          <div className='send-review'>
            <button>Добавить отзыв</button>
          </div>
        </div>
      </div>
    )
  }
}