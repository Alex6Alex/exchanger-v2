import React from 'react'

import ExchangeForm from './ExchangeForm/ExchangeForm'
import ReservesInfo from './ReservesInfo/ReservesInfo'

export default class Exchange extends React.Component {
  render() {
    return(
      <div className='exchange'>
        <ExchangeForm/>
        <ReservesInfo/>
      </div>
    )
  }
}