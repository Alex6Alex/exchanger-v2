import React from 'react'

import ChooseCurrencyItem from './ChooseCurrencyItem'

export default class ChooseCurrency extends React.Component {
  getCurrency(currency) {
    this.props.getCurrency(currency)
  }

  showCurrencyList() {
    return this.props.currencyList.map((currency, index) => (
      <ChooseCurrencyItem key={index} currency={currency} getCurrency={this.getCurrency.bind(this)}/>
    ))
  }

  render() {
    let visible = 'hidden';
    this.props.visible ? visible = 'visible' : visible = 'hidden';
    return (
      <div className='choose-currency-list' style={{ visibility: visible }}>
        { this.showCurrencyList() }
      </div>
    )
  }
}