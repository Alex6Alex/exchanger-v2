import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import Contacts from './Contacts/Contacts'
import Reviews from './Reviews/Reviews'

export default class Content extends React.Component {
  render() {
    return(
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contacts/' component={Contacts}/>
          <Route path='/reviews/' component={Reviews}/>
        </Switch>
      </div>
    )
  }
}
