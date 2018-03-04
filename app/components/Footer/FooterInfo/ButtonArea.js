import React from 'react'

import { Link } from 'react-router-dom'

export default class ButtonArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {link: '/'};
  }

  componentDidMount() {
    this.setState({link: this.props.link});
  }

  render() {
    return(
      <div className='button-area'>
        <Link to={this.state.link}><button className={this.props.className}>{this.props.title}</button></Link>
      </div>
    )
  }
}