import React, {Component} from 'react';
import './header.css'

import { NavLink } from 'react-router-dom';

class Header extends Component {
  render () {
    console.log(this.props)

    return (
      <div className="Header">
        <div className="Header-menu-title">
          <h1>Header</h1>
        </div>
        <div className="Header-menu-items">
          <NavLink
            to="/"
            activeClassName="selected"
            >Home</NavLink>
          <NavLink
              to="/contact"
              activeClassName="selected"
              >Contact</NavLink>
          <NavLink
            to="/about"
            activeClassName="selected"
            >About</NavLink>
        </div>
      </div>
    );
  }
}

export default Header