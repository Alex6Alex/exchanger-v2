import React from 'react'

import Logo from '../../Logo/Logo'
import Navigation from './Navigation/Navigation'

export default class HeaderInfo extends React.Component {
  render() {
    return(
      <div className='header-info'>
        <Logo/>
        <Navigation/>
      </div>
    )
  }
}
