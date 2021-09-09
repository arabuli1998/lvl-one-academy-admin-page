import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="shadow"></div>
      <div className="main-info">
        <h1>web development & websites promotions</h1>
        <Typed
          className="typed-text"
          strings={['Web Design', 'Web Development', 'Google Ads']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link to="/contacts" className="btn-main">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
