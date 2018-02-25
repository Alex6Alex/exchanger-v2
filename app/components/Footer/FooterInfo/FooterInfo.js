import React from 'react'

import Logo from '../../Logo/Logo'
import ButtonArea from './ButtonArea'

export default class FooterInfo extends React.Component {
  render() {
    return(
      <div className='footer-info'>
        <Logo/>
        <div className='footer-navigation'>
          <ButtonArea className='make-review' title='Оставить отзыв'/>
          <ButtonArea className='question' title='Задать вопрос'/>
        </div>
        <div className='site-info'>
          <span>© 2018, example.com</span>
        </div>
      </div>
    )
  }
}