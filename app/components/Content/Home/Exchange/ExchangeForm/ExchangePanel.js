import React from 'react'

import ChooseCurrency from './ChooseCurrency/ChooseCurrency'

export default class ExchangePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleCurrencyList: false,
      currency: this.props.currency,
      code: this.props.code,
      value: this.props.value,
      course: this.props.course,
      iconClass: 'default'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currency: nextProps.currency,
      code: nextProps.code,
      iconClass: 'selected-icon ' + nextProps.currency,
      value: nextProps.value,
      course: nextProps.course
    });
  }

  openCurrencyList() {
    this.setState({visibleCurrencyList: !this.state.visibleCurrencyList});
  }

  updateCurrency(currency) {
    this.props.updateTitle(currency, this.props.type);
    this.setState({visibleCurrencyList: false});
  }

  handleChange(event) {
      this.props.valueChange(event.target.value, this.props.type);
      event.preventDefault();
  }

  setValue() {
    let value = this.state.value;
    let course = this.state.course;
    if (value > 0 && course > 0) {
      return value * course;
    } else {
      return ''
    }
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
            <span>Курс обмена: {this.props.exchangeCourse}</span>
          )}
        </div>
        <div className='exchange-panel-count'>
          <div className='exchange-panel-count-input'>
            {this.props.type == 'exchange-from' ? (
              <input type='text' placeholder='Введите сумму' onChange={this.handleChange}/>
            ) : (
              <input id='ex-to' type='text' placeholder='Сумма к получению' onChange={this.handleChange} value={this.setValue()}/>
            )}
            <p className='currency-code'>{this.state.code}</p>
          </div>
          {this.props.type == 'exchange-from' ? (
            <span>Сумма не должна превышать кол-во валюты в резерве.</span>
          ) : (
            <span>Сумма к получению</span>
          )}
        </div>
      </div>
    )
  }
}
