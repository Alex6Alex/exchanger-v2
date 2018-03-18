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
      }
    };
  }

  componentDidMount() {
    this.createInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.courseUpdater);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    if (prevState.sellCurrency !== this.state.sellCurrency || prevState.buyCurrency !== this.state.buyCurrency) {
      this.updateCourse()
    }
  }

  createInterval() {
    let courseUpdater = setInterval(() => {
      this.updateCourse()
    }, 5000);
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
      axios.get('https://exchanger-api.herokuapp.com/currencies/current_course', {
        params: {
          sell_currency: this.state.sellCurrency.code,
          buy_currency: this.state.buyCurrency.code
        }
      })
      .then(results => {
        this.setState({
          course: {
            sell: 1,
            buy: results.data.sell_course
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

  render() {
    return(
      <div className='exchange-form'>
        <div className='exchange-form-header'>
          <h1>Обмен {this.state.sellCurrency.name} на {this.state.buyCurrency.name}</h1>
        </div>
        <div className='exchange-form-main'>
          <ExchangePanel type='exchange-from' currencyList={this.props.currencyList} currency={this.state.sellCurrency.name}
            code={this.state.sellCurrency.code} updateTitle={this.updateTitle.bind(this)}/>
          <ExchangePanel type='exchange-to' currencyList={this.props.currencyList} currency={this.state.buyCurrency.name}
            code={this.state.buyCurrency.code} updateTitle={this.updateTitle.bind(this)}/>
          <div className='exchange-details'>
            <div className='exchange-course'>
              <h2>По курсу обмена {this.state.course.sell} {this.state.sellCurrency.code} - {this.state.course.buy} {this.state.buyCurrency.code}</h2>
            </div>
            <Detail className='from-pocket' title='С кошелька' placeholder={this.state.sellCurrency.walletExample}/>
            <Detail className='to-pocket' title='На кошелек' placeholder={this.state.buyCurrency.walletExample}/>
            <Detail className='email' title='Ваш email' placeholder='Например: example@mail.ru'/>
          </div>
          <div className='exchange-end'>
            <button>Обменять</button>
          </div>
        </div>
      </div>
    )
  }
}