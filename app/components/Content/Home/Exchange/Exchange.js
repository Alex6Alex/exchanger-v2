import React from 'react'
import axios from 'axios'

import ExchangeForm from './ExchangeForm/ExchangeForm'
import ReservesInfo from './ReservesInfo/ReservesInfo'

export default class Exchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyList: [],
      currencyReserves: []
    }
  }

  componentDidMount() {
    let options = [
      {
        baseURL: 'https://exchanger-api.herokuapp.com',
        url: '/api/currencies/currency_list',
        method: 'get'
      },
      {
        baseURL: 'https://exchanger-api.herokuapp.com',
        url: '/api/currencies/currency_reserves',
        method: 'get'
      }
    ];

    axios.all([
      axios.request(options[0]),
      axios.request(options[1])
    ]).then(
      axios.spread((currencyList, currencyReserves) => {
        this.setState({
          currencyList: currencyList.data,
          currencyReserves: currencyReserves.data
        });
      })
    )
  }

  render() {
    return(
      <div className='exchange'>
        <ExchangeForm currencyList={this.state.currencyList}/>
        <ReservesInfo currencyReserves={this.state.currencyReserves}/>
      </div>
    )
  }
}