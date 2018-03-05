import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../actions';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.logouter = this.logouter.bind(this);
  };

  logouter() {
    this.props.logout();
    this.props.history.push("/");
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <h2>Welcome, {this.props.user}!</h2>
          <button onClick={ () => this.logouter() }>Log out</button>
        </div>)
    }
    return (<Redirect to='/login'/>)
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.username,
    isLoggedIn: state.auth.isLoggedIn
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    logout: () => {dispatch(logout())}
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);
