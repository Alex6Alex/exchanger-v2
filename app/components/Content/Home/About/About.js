import React from 'react'

export default class About extends React.Component {
  render() {
    return(
      <div className='about'>
        <div className='about-title'>
          <h1>Обменник электронных денег bit-exchanger.co.ua</h1>
        </div>
        <div className='about-block'>
          <p>
            С помощью нашего сервиса, Вы сможете продать или купить электронную валюту.
            Обмен выполняется в полуавтоматическом режиме, надежно, в течении суток.
            Мы готовы предложить Вам обмен небольших сумм, обеспечивая при этом сохранность всех данных.
          </p>
          <p>
            Обменять можно Bitcoin, Litecoin, Ripple, Qiwi.
          </p>
        </div>
      </div>
    )
  }
}
