import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Landing extends React.Component {
  render() {
    if (!this.props.isLoggedIn) {
      return (<h2>Landing</h2>)
    }
    return (<Redirect to='/dashboard'/>)
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(Landing);
