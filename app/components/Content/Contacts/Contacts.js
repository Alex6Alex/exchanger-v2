import React from 'react'

export default class Contacts extends React.Component {
  render() {
    return(
      <div className='contacts'>
        <div className='contacts-header'>
          <h1>Служба поддержки клиентов bit-exchanger.co.ua</h1>
        </div>
        <div className='contacts-description'>
          <div className='contacts-description-title'>
            <p>
              Уважаемые пользователи, по всем вопросам, которые Вас интересуют, Вы можете обратится по следующему электронному адресу:
            </p>
          </div>
          <div className='contacts-list'>
            <div className='contacts-info'>
              <p className='contact-name'>Почта поддержки: </p>
              <p className='contact-address'>support@bit-exchanger.co.ua</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
