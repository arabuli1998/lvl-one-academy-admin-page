import React from 'react';
import mylogo from './images/loggos.png';
import '../App.css';
import { Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem('user-info', JSON.stringify());
    if (localStorage.getItem('user') === null) {
      navigate('/');
    }
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-dark"
      id="navbars
    
    "
    >
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img src={mylogo} alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Menu className="icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home" id="dd">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="dd" to="/infromation#">
                images
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/weather" id="dd">
                Weather
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" id="dd">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="dd" to="/user-page">
                User Page
              </Link>
            </li>
            <li className="nav-item" onClick={logout}>
              <a className="nav-link" id="dd" href="#">
                log Out
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="dd" to="/contacts">
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
