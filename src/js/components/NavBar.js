import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {

  render() {
    return (
        <nav className="navbar bg-dark navbar-dark text-white fixed-bottom">
          <ul className="navbar-nav">
            
            <li className="nav-item active">
              <Link to="/categorias" className="nav-link">Categorias</Link>
            </li>
            <li className="nav-item">
              <Link to="/catalogos/1" className="nav-link">Catalogos</Link>
            </li>
            
          </ul>
        </nav>
 );
  }

}

export default NavBar;