import React from 'react';
import './userlist.css';
import Topbar from '../../components/topbar/Topbar';
import { Usertable } from './Usertable';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Footer from '../../components/footerbar/Footer';
import Sidebar from '../../components/sidebar/Sidebar';


function Userlist() {
  return (
    <Grid container>
    <Topbar />
    <Sidebar />
    <Grid container className="containers">
      
      <div className="firsts">
        <h5>members</h5>
        <button>
          <Link to="/adduser" className="links">
            add User
          </Link>
        </button>
      </div>
      <Grid item xs={12} className="second">
        <Usertable />
      </Grid>
      </Grid>
      <Footer />
      </Grid>
  );
}

export default Userlist;
