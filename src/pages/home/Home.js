import React from 'react';
import './home.css';
import Featureinfo from '../../components/features/Featureinfo';
import Widgetsm from '../../components/widgetsm/Widgetsm';
import Sidebar from '../../components/sidebar/Sidebar';
import { Grid } from '@material-ui/core';
import Topbar from '../../components/topbar/Topbar';
import Footer from '../../components/footerbar/Footer';


function Home() {
  return (
    
    <Grid container id="home">
      <Sidebar />
     <Topbar />
      <Featureinfo />
      
     

      <Widgetsm />
      <Footer />
    </Grid>
  );
}
export default Home;
