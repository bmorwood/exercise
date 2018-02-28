import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './components/login'
import Navbar from './components/navbar'
import Landing from './components/landing.js'
import Dashboard from './components/dashboard.js'
import { createStore, subscribe } from 'redux'
import { Provider } from 'react-redux'
import exerciseApp from './reducers'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom"

let store = createStore(exerciseApp)


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar/>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
