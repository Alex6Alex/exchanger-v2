import React from 'react'

import ChooseCurrencyItem from './ChooseCurrencyItem'

export default class ChooseCurrency extends React.Component {
  getCurrency(currencyName) {
    this.props.getCurrency(currencyName)
  }

  render() {
    let visible = 'hidden';
    this.props.visible ? visible = 'visible' : visible = 'hidden';
    return (
      <div className='choose-currency-list' style={{ visibility: visible }}>
        <ChooseCurrencyItem name='Bitcoin' getCurrency={this.getCurrency.bind(this)}/>
        <ChooseCurrencyItem name='Ethereum' getCurrency={this.getCurrency.bind(this)}/>
        <ChooseCurrencyItem name='Qiwi' getCurrency={this.getCurrency.bind(this)}/>
      </div>
    )
  }
}