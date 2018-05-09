import React from 'react'
import axios from 'axios'

import Detail from './Detail'
import ExchangePanel from './ExchangePanel'

export default class ExchangeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sellCurrency: {
        name: '',
        code: '',
        walletExample: 'Например:'
      },
      buyCurrency: {
        name: '',
        code: '',
        walletExample: 'Например:'
      },
      course: {
        sell: 0,
        buy: 0
      },
      exchangeInfo: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle  = this.updateTitle.bind(this);
  }

  componentDidMount() {
    this.createInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.courseUpdater);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sellCurrency !== this.state.sellCurrency || prevState.buyCurrency !== this.state.buyCurrency) {
      this.updateCourse()
    }
  }

  createInterval() {
    let courseUpdater = setInterval(() => {
      this.updateCourse()
    }, 20000);
    this.setState({ courseUpdater: courseUpdater });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      sellCurrency: {
        name: nextProps.currencyList[0].name,
        code: nextProps.currencyList[0].code,
        walletExample: 'Например: ' + nextProps.currencyList[0].wallet_example
      },
      buyCurrency: {
        name: nextProps.currencyList[1].name,
        code: nextProps.currencyList[1].code,
        walletExample: 'Например: ' + nextProps.currencyList[1].wallet_example
      }
    });
  }

  updateCourse() {
    if(this.state.sellCurrency.code != '' && this.state.buyCurrency.code != '') {
      axios.get('https://exchanger-api.herokuapp.com/api/currencies/current_course', {
        params: {
          sell_currency: this.state.sellCurrency.code,
          buy_currency: this.state.buyCurrency.code
        }
      })
      .then(results => {
        this.setState({
          course: {
            sell: results.data.sell_value,
            buy: (results.data.sell_course * results.data.sell_value).toFixed(results.data.round_value),
            course: results.data.sell_course
          }
        })
      });
    }
  }

  updateTitle(currency, type) {
    if (type == 'exchange-from') {
      this.setState({
        sellCurrency: {
          name: currency.name,
          code: currency.code,
          walletExample: 'Например: ' + currency.wallet_example
        }
      });
    } else {
      this.setState({
        buyCurrency: {
          name: currency.name,
          code: currency.code,
          walletExample: 'Например: ' + currency.wallet_example
        }
      });
    }
  }

  showCourse() {
    return(
      this.state.course.sell + ' ' +
      this.state.sellCurrency.code + ' - ' +
      this.state.course.buy  + ' ' +
      this.state.buyCurrency.code
    )
  }

  updateExchangeInfo(updatedParams) {
    this.setState({ exchangeInfo: { ...this.state.exchangeInfo, ...updatedParams } });
  }

  handleChange(value, changeType) {
    switch(changeType) {
      case 'exchange-from':
        return this.updateExchangeInfo({from: this.state.buyCurrency, from_value: value});
      case 'exchange-to':
        return this.updateExchangeInfo({to: this.state.buyCurrency, to_value: value});
      case 'from-pocket':
        return this.updateExchangeInfo({from_pocket: value});
      case 'to-pocket':
        return this.updateExchangeInfo({to_pocket: value});
      case 'email': {
        return this.updateExchangeInfo({email: value});
      }
    }
  }

  handleSubmit() {
    let params = {
      from: this.state.sellCurrency.code,
      from_value: this.state.exchangeInfo.from_value,
      to: this.state.buyCurrency.code,
      to_value: this.state.exchangeInfo.from_value * this.state.course.course,
      from_pocket: this.state.exchangeInfo.from_pocket,
      to_pocket: this.state.exchangeInfo.to_pocket,
      email: this.state.exchangeInfo.email
    };

    if (this.all_params_exists(params)) {
      axios.post('https://exchanger-api.herokuapp.com/api/currencies/confirm_order', {
        params: params
      });
      alert('Заказ был оформлен. Ожидайте письма от нашего специалиста.')
    } else {
      alert('Были указаны не все данные.')
    }
  }

  all_params_exists(params) {
    let all_params = true;
    // let keys = Object.getOwnPropertyNames(params);
    for(let key in params) {
      if (!params[key])
        all_params = false;
    }
    return all_params;
  }

  render() {
    return(
      <div className='exchange-form'>
        <div className='exchange-form-header'>
          <h1>Обмен {this.state.sellCurrency.name} на {this.state.buyCurrency.name}</h1>
        </div>
        <div className='exchange-form-main'>
          <ExchangePanel
            type='exchange-from'
            currencyList={this.props.currencyList}
            currency={this.state.sellCurrency.name}
            code={this.state.sellCurrency.code}
            updateTitle={this.updateTitle}
            valueChange={this.handleChange}
          />
          <ExchangePanel
            type='exchange-to'
            currencyList={this.props.currencyList}
            currency={this.state.buyCurrency.name}
            code={this.state.buyCurrency.code}
            value={this.state.exchangeInfo.from_value}
            course={this.state.course.course}
            updateTitle={this.updateTitle}
            exchangeCourse={this.showCourse()}
            valueChange={this.handleChange}
          />
          <div className='exchange-details'>
            <div className='exchange-course'>
              <h2>По курсу обмена {this.showCourse()}</h2>
            </div>
            <Detail className='from-pocket' title='С кошелька' placeholder={this.state.sellCurrency.walletExample}
              valueChange={this.handleChange}/>
            <Detail className='to-pocket' title='На кошелек' placeholder={this.state.buyCurrency.walletExample}
              valueChange={this.handleChange}/>
            <Detail className='email' title='Ваш email' placeholder='Например: example@mail.ru'
              valueChange={this.handleChange}/>
          </div>
          <div className='exchange-end'>
            <button onClick={this.handleSubmit}>Обменять</button>
          </div>
        </div>
      </div>
    )
  }
}
