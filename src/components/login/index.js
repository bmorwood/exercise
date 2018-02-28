import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser, typingPassword, typingUsername } from '../../actions';
import './index.css';


class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="form">
          <h2>Login</h2>
          <input onChange={ (e) => this.props.dispatch(typingUsername(e.target.value)) } type="text" placeholder="username"/>
          <input onChange={ (e) => this.props.dispatch(typingPassword(e.target.value)) } type="password" placeholder="password"/>
          <button onClick={ () => this.props.dispatch(authenticateUser()) }>login</button>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
