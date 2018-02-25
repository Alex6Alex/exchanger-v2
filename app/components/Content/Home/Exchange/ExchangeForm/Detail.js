import React from 'react'

export default class Detail extends React.Component {
  render() {
    return(
      <div className={this.props.className}>
        <h2>{this.props.title}</h2>
        <div className='text-holder'>
          <input type='text' placeholder={this.props.placeholder}/>
        </div>
      </div>
    )
  }
}