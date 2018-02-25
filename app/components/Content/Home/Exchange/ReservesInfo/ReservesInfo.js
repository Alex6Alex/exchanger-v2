import React from 'react'

import ReserveCurrency from './ReserveCurrency'

export default class ReservesInfo extends React.Component {
  render() {
    return(
      <div className='reserves-info'>
        <h2>Наши резервы</h2>
        <div className='currencies'>
          <ReserveCurrency currency='Bitcoin' reserve='0.1 BTC'/>
          <ReserveCurrency currency='Ethereum' reserve='0.9 ETH'/>
          <ReserveCurrency currency='Яндекс.Деньги' reserve='10000 RUR'/>
          <ReserveCurrency currency='QIWI' reserve='15000 RUR'/>
          <ReserveCurrency currency='WebMoney' reserve='5000 RUR'/>
        </div>
      </div>
    )
  }
}