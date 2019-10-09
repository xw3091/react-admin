import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AppLayout from './layout'
import Login from './page/login'
import NotFound from './page/404'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/app/dashboard/index" push />} />
          <Route path="/app" component={AppLayout} />
          <Route path="/404" component={NotFound} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App