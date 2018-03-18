import React from 'react'

export default class ChooseCurrencyItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconClass: 'item-logo ' + this.props.currency.name
    }
  }

  setCurrency() {
    this.props.getCurrency(this.props.currency);
  }

  render() {
    return(
      <div className='choose-currency-list-item' onClick={this.setCurrency.bind(this)}>
        <div className={this.state.iconClass}></div>
        <p className='item-name'>{this.props.currency.name}</p>
      </div>
    )
  }
}