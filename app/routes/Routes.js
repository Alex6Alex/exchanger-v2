import React from 'react'
import {/*Redirect,*/ Switch, Route} from 'react-router-dom'

import Wrapper from '../components/Wrapper/Wrapper'

export default class Routes extends React.Component {
  render() {
    const Status = ({code, children}) => (
      <Route render={({staticContext}) => {
        if (staticContext)
          staticContext.status = code;
        return children
      }}/>
    );

    const NotFound = () => (
      <Status code={404}>
        <div>
          <h1>Sorry, can’t find that.</h1>
        </div>
      </Status>
    );

    return (
      <Switch>
        <Route path='/' component={Wrapper}/>
        <Route component={NotFound}/>
      </Switch>
    )
  }
}
