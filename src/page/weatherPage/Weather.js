import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import logo from './images/image.jpg';
import Navbar from '../../componentss/Navbar';

import Form from './form/Form';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '88vh',
    width: '100%',
  },
  firstbox: {
    backgroundImage: `url(${logo})`,
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderBottomRightRadius: '50px',
  },
  secondbox: {
    background: 'linear-gradient( to left, #650039, #990000)',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderTopLeftRadius: '50px',
  },
});

const Weather = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.firstbox}>
        <Form />
      </Grid>
    </Grid>
    </>
  );
};

export default Weather;
