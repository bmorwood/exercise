import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Login from './components/login'
import Navbar from './components/navbar'
import Landing from './components/landing'
import Dashboard from './components/dashboard'
import allReducers from './reducers'
import { browserHistory} from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadState, saveState } from './localStorage'

const persistedState = loadState();
const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe (() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
