import React from 'react'

export default class ReserveCurrency extends React.Component {
  render() {
    return(
      <div className='currency'>
        <div className='currency-logo'></div>
        <div className='currency-name'>{this.props.currency}</div>
        <div className='currency-reserve'>{this.props.reserve}</div>
      </div>
    )
  }
}