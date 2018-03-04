import React from 'react'

import { Link } from 'react-router-dom'

export default class ButtonArea extends React.Component {
  render() {
    return(
      <div className='button-area'>
        <Link to='/contacts'><button className={this.props.className}>{this.props.title}</button></Link>
      </div>
    )
  }
}