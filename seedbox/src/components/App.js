import React from 'react';
import querystring from 'querystring'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { tokenAction } from '../actions'

import { UserProfilePage, CreationPage, Navigation, HomePage, AboutPage, LoginPage } from '.'

function App() {

  let parsed = querystring.parse(window.location.search.substring(1))
  let accessToken = parsed.access_token
  const dispatch = useDispatch()
  if (accessToken)
    dispatch(tokenAction(accessToken))

  return (
    <Router>
      {
        accessToken ?
          <>
            <Navigation />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/create" component={CreationPage} />
              <Route path="/profile" component={UserProfilePage} />
            </Switch>
          </>
          :
          <LoginPage />
      }
    </Router>
  )
}


export default App;