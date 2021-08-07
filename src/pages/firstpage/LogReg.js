import React from 'react';
import logreg from './logreg.css';
import { Link } from 'react-router-dom';
import Register from '../../components/register/Register';

function LogReg() {
    
    
  return (
    <div className="main">
      <div className="firstt"></div>
      <div className="second">
              <ul>
                  <h2>Log in to visit our site</h2>
          <li>
            <Link to="/login" className="link">
              Login
            </Link>
          </li>
          <h3>or</h3>
          <li>
            <Link to="/register" className="link">
              Register
            </Link>
          </li>
        </ul>
      </div>
      <div className="fird"></div>
    </div>
  );
}

export default LogReg;
