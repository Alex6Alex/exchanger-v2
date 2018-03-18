import React from 'react'

import ChooseCurrency from './ChooseCurrency/ChooseCurrency'

export default class ExchangePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleCurrencyList: false,
      currency: this.props.currency,
      code: this.props.code,
      iconClass: 'default'
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currency: nextProps.currency,
      code: nextProps.code,
      iconClass: 'selected-icon ' + nextProps.currency
    })
  }

  openCurrencyList() {
    this.setState({visibleCurrencyList: !this.state.visibleCurrencyList});
  }

  updateCurrency(currency) {
    this.props.updateTitle(currency, this.props.type);
    this.setState({visibleCurrencyList: false});
  }

  render() {
    return(
      <div className='exchange-panel'>
        <ChooseCurrency currencyList={this.props.currencyList} visible={this.state.visibleCurrencyList}
          getCurrency={this.updateCurrency.bind(this)}/>
        {this.props.type == 'exchange-from' ? (
          <div className='exchange-panel-header'>
            <p className='first-header'>Вы отдаете</p>
            <span className='choose-currency'>Выберите валюту и сумму для обмена</span>
          </div>
        ) : (
          <div className='exchange-panel-header'>
            <p className='first-header'>Вы получаете</p>
            <span className='choose-currency'>Выберите валюту, которую хотите получить</span>
          </div>
        )}
        <div className='exchange-panel-name'>
          <div className='exchange-panel-name-select' onClick={this.openCurrencyList.bind(this)}>
            <div className={this.state.iconClass}></div>
            <p className='selected-name'>{this.state.currency}</p>
            <span className='fas fa-chevron-down'></span>
          </div>
          {this.props.type == 'exchange-from' ? (
            <span>Валюта</span>
          ) : (
            <span>Курс обмена: 100 RUR - 0.004 BTC</span>
          )}
        </div>
        <div className='exchange-panel-count'>
          <div className='exchange-panel-count-input'>
            <input type='text' placeholder='Введите сумму'/>
            <p className='currency-code'>{this.state.code}</p>
          </div>
          {this.props.type == 'exchange-from' ? (
            <span>Минимальная сумма: 100 RUR</span>
          ) : (
            <span>Сумма к получению</span>
          )}
        </div>
      </div>
    )
  }
}