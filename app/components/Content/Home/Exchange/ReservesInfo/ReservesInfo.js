import React from 'react'

import ReserveCurrency from './ReserveCurrency'

export default class ReservesInfo extends React.Component {
  showCurrencyReserves() {
    return this.props.currencyReserves.map((currency, index) => (
      <ReserveCurrency currency={currency[0]} reserve={currency[2]} code={currency[1]} key={index}/>
    ))
  }

  render() {
    return(
      <div className='reserves-info'>
        <h2>Наши резервы</h2>
        <div className='currencies'>
          { this.showCurrencyReserves() }
        </div>
      </div>
    )
  }
}