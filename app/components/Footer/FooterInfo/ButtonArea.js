import React from 'react'

export default class ButtonArea extends React.Component {
  render() {
    return(
      <div className='button-area'>
        <button className={this.props.className}>{this.props.title}</button>
      </div>
    )
  }
}