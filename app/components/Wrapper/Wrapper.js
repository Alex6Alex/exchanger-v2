import React from 'react'

import Header from '../Header/Header'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'

export default class Wrapper extends React.Component {
  render() {
    return(
      <div className='wrapper'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}
