import React, { Component } from 'react';
import './login.css';

class Username extends Component {
  render() {
    return <input onChange={this.props.onChange} type="text" placeholder="username"/>
  };
}

class Password extends Component {
  render() {
    return <input onChange={this.props.onChange} type="password" placeholder="password"/>
  };
}


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  usernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  passwordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <h2>Login</h2>
          <Username onChange={this.usernameChange}/>
          <Password onChange={this.passwordChange}/>
          <button onClick={this.props.onClick}>login</button>
        </div>
      </div>
    );
  }
}

export default Login;
