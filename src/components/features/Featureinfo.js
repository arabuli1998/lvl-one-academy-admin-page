import React from 'react';
import './featureinfo.css';
import { Grid } from '@material-ui/core';

export default function Featureinfo() {
  return (
    <Grid container className="featured">
      <Grid item lg={4} md={4} sm={4} xs={12} className="featuredItem">
        <span className="featuredtitle">revanue</span>
        <div className="featuredmonaycontainer">
          <span className="featuredmonay">$33</span>
          <span className="featuredmonayrate">-11.2</span>
        </div>
        <span className="featuredsub">compare</span>
      </Grid>

      <Grid item lg={4} md={4} sm={4} xs={12} className="featuredItem">
        <span className="featuredtitle">sales</span>
        <div className="featuredmonaycontainer">
          <span className="featuredmonay">$363</span>
          <span className="featuredmonayrate">-81.2</span>
        </div>
        <span className="featuredsub">compare</span>
      </Grid>

      <Grid item lg={4} md={4} sm={4} xs={12} className="featuredItem">
        <span className="featuredtitle">cost</span>
        <div className="featuredmonaycontainer">
          <span className="featuredmonay">$3</span>
          <span className="featuredmonayrate">-91.2</span>
        </div>
        <span className="featuredsub">compare</span>
          </Grid>
          
    </Grid>
  );
}
