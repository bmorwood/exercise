import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, typingPassword, typingUsername } from '../../actions';
import './index.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  };

  login() {
    this.props.login(this.props.username);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <h2>Login</h2>
          <input onChange={ (e) => this.props.typingUsername(e.target.value) } type="text" placeholder="username"/>
          <input onChange={ (e) => this.props.typingPassword(e.target.value) } type="password" placeholder="password"/>
          <button onClick={ () => this.login() }>login</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {username: state.login.username}
}

const matchDispatchToProps = (dispatch) => {
    return {
        typingUsername: (value) => dispatch(typingUsername(value)),
        typingPassword: (value) => dispatch(typingPassword(value)),
        login: (username) => {dispatch(login(username))}
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
