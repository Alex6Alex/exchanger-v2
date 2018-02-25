import React from 'react'

import Detail from './Detail'
import ExchangePanel from './ExchangePanel'

export default class ExchangeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sellCurrency: {
        name: 'Сбербанк',
        code: 'RUR'
      },
      buyCurrency: {
        name: 'Bitcoin',
        code: 'BTC'
      }
    };
  }

  updateTitle(currency, type) {
    if (type == 'exchange-from')
      this.setState({sellCurrency: { name: currency }});
    else
      this.setState({buyCurrency: { name: currency }});
  }

  render() {
    return(
      <div className='exchange-form'>
        <div className='exchange-form-header'>
          <h1>Обмен {this.state.sellCurrency.name} на {this.state.buyCurrency.name}</h1>
        </div>
        <div className='exchange-form-main'>
          <ExchangePanel type='exchange-from' currency={this.state.sellCurrency.name}
            code={this.state.sellCurrency.code} updateTitle={this.updateTitle.bind(this)}/>
          <ExchangePanel type='exchange-to' currency={this.state.buyCurrency.name}
            code={this.state.buyCurrency.code} updateTitle={this.updateTitle.bind(this)}/>
          <div className='exchange-details'>
            <div className='exchange-course'>
              <h2>По курсу обмена 100 RUR - 0.004 BTC</h2>
            </div>
            <Detail className='from-pocket' title='С кошелька' placeholder='Например: 12432335255'/>
            <Detail className='to-pocket' title='На кошелек' placeholder='Например: L563Ggthr66h5he6h4'/>
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