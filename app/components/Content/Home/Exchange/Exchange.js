import React from 'react'
import axios from 'axios'

import ExchangeForm from './ExchangeForm/ExchangeForm'
import ReservesInfo from './ReservesInfo/ReservesInfo'

export default class Exchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyList: []
    }
  }

  componentDidMount() {
    axios.get('https://exchanger-api.herokuapp.com/currencies/currency_list')
      .then(results => {
        this.setState({
          currencyList: results.data
        })
      });
  }

  render() {
    return(
      <div className='exchange'>
        <ExchangeForm currencyList={this.state.currencyList}/>
        <ReservesInfo currencyList={this.state.currencyList}/>
      </div>
    )
  }
}