import React from 'react'

import Logo from '../../Logo/Logo'
import ButtonArea from './ButtonArea'

export default class FooterInfo extends React.Component {
  render() {
    return(
      <div className='footer-info'>
        <Logo/>
        <div className='footer-navigation'>
          <ButtonArea className='make-review' title='Оставить отзыв' link='/reviews'/>
          <ButtonArea className='question' title='Задать вопрос' link='/contacts'/>
        </div>
        <div className='site-info'>
          <span>© 2018, bit-exchanger.co.ua</span>
        </div>
      </div>
    )
  }
}
