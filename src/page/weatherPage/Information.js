import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import {
  LocationOn,
  WbSunny,
  CloudQueue,
  HdrWeak,
  Looks,
} from '@material-ui/icons';

const useStyles = makeStyles({
  box: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  row: {
    color: '#990000',
    fontWeight: 'bold',
    fontSize: '18px',
    width: '25%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  rows: {
    color: 'red',
    display: 'flex',
    alignItems: 'center',
  },
  value: {
    color: 'white',
    flex: '1 2 100px',
  },
  icons: {
    color: 'white',
  },
});

export const Information = ({ data }) => {
  const classes = useStyles();

  console.log({ data });

  return data ? (
    <Box className={classes.box}>
      <Typography className={classes.row}>
        <LocationOn className={classes.icons} />
        Location: &nbsp;
        <Box className={classes.value} component="span">
          {' '}
          {data.name}, {data.sys.country}
        </Box>{' '}
      </Typography>

      <Typography className={classes.row}>
        <WbSunny className={classes.icons} />
        Temperature:&nbsp;
        <Box className={classes.value} component="span">
          {' '}
          {data.main.temp}
        </Box>{' '}
      </Typography>

      <Typography className={classes.row}>
        <CloudQueue className={classes.icons} />
        Humidity: &nbsp;
        <Box className={classes.value} component="span">
          {data.main.humidity}
        </Box>{' '}
      </Typography>

      <Typography className={classes.row}>
        <WbSunny className={classes.icons} />
        Sun Set:&nbsp;
        <Box className={classes.value} component="span">
          {data.sys.sunset}
        </Box>{' '}
      </Typography>

      <Typography className={classes.row}>
        <WbSunny className={classes.icons} />
        Sun Rise:&nbsp;
        <Box className={classes.value} component="span">
          {data.sys.sunrise}
        </Box>{' '}
      </Typography>

      <Typography className={classes.row}>
        <Looks className={classes.icons} />
        Description:&nbsp;
        <Box className={classes.value} component="span">
          {data.weather[0].description}
        </Box>{' '}
      </Typography>

      <Typography className={classes.row}>
        <HdrWeak className={classes.icons} />
        Main:&nbsp;
        <Box className={classes.value} component="span">
          {data.weather[0].main}
        </Box>
      </Typography>

      <Typography className={classes.rows}>Thank You for visit!!!</Typography>
    </Box>
  ) : (
    ''
  );
};
