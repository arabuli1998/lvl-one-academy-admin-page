import React from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';
import { Home, PeopleOutline, TransitEnterexit,MonetizationOn } from '@material-ui/icons';

export default function Sidebar() {
  function elete() {
    localStorage.removeItem("user-info", JSON.stringify());
    console.log("Fghfgh")
  }
  
  return (
    
    <div id="sidebar">
      
      <input type="checkbox" id="checkbox"/>
      <div id="main">
      
        <ul className="ul">
          <li><Link to="/home"><Home /> Home</Link></li>
          <li><Link to="/Userlist"><PeopleOutline /> Users</Link></li>
          <li><TransitEnterexit />Translations</li>
          <li><MonetizationOn />Sales</li>
          <li>Reports</li>
          <li>Manage</li>
          <li><Link to="/userpage"> my page</Link></li>
          <li><Link to="/" onClick={elete}> log out</Link></li>
          <li><h4>contacts</h4></li>
          <li>Mail</li>
        </ul>
      </div>
      
      <label for="checkbox" className="label"></label>
      
      </div>
  );
}
