import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      auth: false
    };
  }

  handleClick() {
    this.setState({
      auth: true
    });
    console.log(this.state.auth);
  }

  render() {
    return (
      <div className="App">
        <Login onClick={() => this.handleClick()}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
