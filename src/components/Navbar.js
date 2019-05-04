import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../images/conference-icon.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" width="50" height="50"/>
            <span className="font-weight-light">Tecnology</span>
            <span className="font-weight-bold">Conf</span>
        </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;