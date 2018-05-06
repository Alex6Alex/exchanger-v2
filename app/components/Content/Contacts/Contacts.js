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
              Уважаемые пользователи, по всем вопросам, которые Вас интересуют, Вы можете обратится по следующим электронным адресам:
            </p>
          </div>
          <div className='contacts-list'>
            <div className='contacts-info'>
              <p className='contact-name'>Google почта: </p>
              <p className='contact-address'>example@gmail.com</p>
            </div>
            <div className='contacts-info'>
              <p className='contact-name'>Yandex почта: </p>
              <p className='contact-address'>example@yandex.ru</p>
            </div>
            <div className='contacts-info'>
              <p className='contact-name'>Mail почта: </p>
              <p className='contact-address'>example@mail.ru</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
