import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'

export default class Content extends React.Component {
  render() {
    return(
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    )
  }
}
