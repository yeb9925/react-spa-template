import React, { Component } from 'react'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'

import { Navigation, Main } from './components'

import history from './history'

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Navigation>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Navigation>
      </Router>
    )
  }
}
