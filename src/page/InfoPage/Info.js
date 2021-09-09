import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Navbar from '../../componentss/Navbar';

const useStyle = makeStyles({
  mainContainer: {
    padding: '20px',
  },
  mainContainerTwo: {
    backgroundImage:
      'url(https://shorthand.com/the-craft/6-ways-to-navigate-a-travel-story/assets/i1CbyaIf1a/tom-barrett-travel-plane-750x1125.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'norepeat',
  },

  firstCol: {
    backgroundImage:
      'url(https://www.crankyfranksbbq.com/wp-content/uploads/travel37.jpg)',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  secondCol: {
    backgroundImage:
      'url(https://previews.123rf.com/images/zeinousstudio/zeinousstudio2005/zeinousstudio200500008/146862981-time-to-travel-vector-concept-design-time-to-travel-text-in-globe-with-travelling-and-world-country-.jpg)',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  secondThirdCol: {
    backgroundImage:
      'url(https://ichef.bbci.co.uk/live-experience/cps/320/cpsprodpb/BE6E/production/_118805784_2_travel_rules_976copy2-nc.png)',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  secondfirstCol: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    justifyContent: 'center',
  },
  thirdCol: {
    backgroundImage:
      'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/enjoying-the-view-royalty-free-image-1582838254.jpg)',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  thirdSixCol: {
    backgroundImage:
      'url(https://www.thesouthernhighlands.com.au/wp-content/uploads/2018/11/travel_cliff_ocean_feet-ss-Galyna-Andrushko.jpg)',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  thirdFiveCol: {
    backgroundImage:
      'url(https://content.presspage.com/uploads/685/1920_happytravel1-8.jpg?10000)',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  thirdFourthCol: {
    backgroundImage:
      'url(https://s.wsj.net/public/resources/images/BN-FN010_expert_M_20141112114446.jpg)',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  thirdThirdCol: {
    backgroundImage:
      'url(https://planningyouradventure.co.uk/wp-content/uploads/2020/06/local-hiking-group-1024x682.jpg)',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  thirdSecondCol: {
    backgroundImage:
      'url(https://content.presspage.com/uploads/1376/1920_sustainabletravel.jpg?10000)',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  fouthdCol: {
    backgroundImage:
      'url(https://res.cloudinary.com/grohealth/image/upload/v1583506667/DCUK/Content/iStock-1001927840-1.jpg)',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
 
  fouthtwoCol: {
    backgroundImage:
      'url(https://media-exp1.licdn.com/dms/image/C4D1BAQGGdNo6IlDOCQ/company-background_10000/0/1519801807380?e=2159024400&v=beta&t=VWHuXHsmYAXZB4XQn7H63FLLvHjjMfs6CdxCh3HwcCM)',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  fouththreeCol: {
    backgroundImage:
      'url(https://res.cloudinary.com/zizoo/images/f_auto,q_auto/v1592484969/shutterstock_776392324/shutterstock_776392324.jpg)',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
});
const Info = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
    <Grid container className={classes.mainContainer}>
      
      <Grid container className={classes.mainContainerTwo}>
        <Grid container className={classes.columnContainers}>
          <Grid item xs={12} sm={6} md={2} className={classes.firstCol}></Grid>
        </Grid>

        <Grid container className={classes.columnContainers}>
          <Grid item xs={12} sm={6} md={8} className={classes.secondfirstCol}>
            <h1>Enjoy your trip with us!</h1>
            <p>
              Info-Tbilisi Travel is a vacation and travel Incoming Company
              which specializes in the business of travel premiums and
              incentives.
            </p>
          </Grid>
          <Grid item xs={6} sm={3} md={2} className={classes.secondCol}></Grid>
          <Grid
            item
            xs={6}
            sm={3}
            md={2}
            className={classes.secondThirdCol}
          ></Grid>
        </Grid>

        <Grid container className={classes.columnContainers}>
          <Grid item xs={6} sm={4} md={2} className={classes.thirdCol}></Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            className={classes.thirdSecondCol}
          ></Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            className={classes.thirdThirdCol}
          ></Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            className={classes.thirdFourthCol}
          ></Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            className={classes.thirdFiveCol}
          ></Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            className={classes.thirdSixCol}
          ></Grid>
        </Grid>

        <Grid container className={classes.columnContainers}>
          <Grid item xs={0} sm={0} md={4}></Grid>
          <Grid item xs={12} sm={4} md={2} className={classes.fouthdCol}></Grid>
          <Grid
            item
            xs={6}
            sm={8}
            md={2}
            className={classes.fouthtwoCol}
          ></Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            className={classes.fouththreeCol}
          ></Grid>
        </Grid>
      </Grid>
      </Grid>
      </>
  );
};

export default Info;
