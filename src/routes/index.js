import React from 'react'

import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import NoMatch from '../views/NotMatch'
import Home from '../views/Home'
import Hello from '../views/Hello'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hello" component={Hello} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default Routes
