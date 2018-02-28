import React, { Component } from 'react';
import './index.css';

class Navbar extends Component {
  render() {
    return (
      <nav className='cf'>
        <ul className='cf'>
          <li>
            <a href='/'>Landing</a>
          </li>
          <li>
            <a href='/login'>Login</a>
          </li>
          <li>
            <a href='/dashboard'>Dashboard</a>
          </li>
        </ul>
        <a href='' id='openup'>MENU</a>
      </nav>
    );
  }
}

export default Navbar;
