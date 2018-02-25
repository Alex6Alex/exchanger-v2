import React from 'react'

import Exchange from './Exchange/Exchange'
import About from './About/About'

export default class Home extends React.Component {
  componentDidMount() {
    document.title = 'Обменник'
  }

  render() {
    return(
      <div className='home-page'>
        <Exchange/>
        <About/>
      </div>
    )
  }
}
