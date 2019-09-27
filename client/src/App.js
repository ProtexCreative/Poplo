import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css'
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';

import PrivateRoute from './components/routing/PrivateRoute'

import { loadUser } from './actions/auth'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/home" component={Home} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;