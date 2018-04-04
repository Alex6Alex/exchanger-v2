import React from 'react'

export default class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.valueChange(event.target.value, this.props.className);
    event.preventDefault();
  }

  render() {
    return(
      <div className={this.props.className}>
        <h2>{this.props.title}</h2>
        <div className='text-holder'>
          <input type='text' placeholder={this.props.placeholder} onChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}