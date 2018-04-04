import React from 'react'

export default class ReserveCurrency extends React.Component {
  render() {
    return(
      <div className='currency'>
        <div className={'currency-logo ' + this.props.currency}></div>
        <div className='currency-name'>{this.props.currency}</div>
        <div className='currency-reserve'>{this.props.reserve} {this.props.code}</div>
      </div>
    )
  }
}