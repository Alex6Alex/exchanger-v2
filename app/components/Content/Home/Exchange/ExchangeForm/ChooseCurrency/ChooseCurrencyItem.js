import React from 'react'

export default class ChooseCurrencyItem extends React.Component {
  setCurrency() {
    this.props.getCurrency(this.props.name);
  }

  render() {
    return(
      <div className='choose-currency-list-item' onClick={this.setCurrency.bind(this)}>
        <div className='item-logo'></div>
        <p className='item-name'>{this.props.name}</p>
      </div>
    )
  }
}