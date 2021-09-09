import React, { useState } from 'react';
import { Box, TextField, Button, makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { Apidata } from '../../../componentss/api/Api';
import { Information } from '../Information';

const useStyles = makeStyles({
  mainbox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  box: {
    width: '100%',
    height: 'auto',
    padding: '10',
    backgroundColor: 'rgba(88,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',

    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  inputs: {
    color: '#fff',
    flex: '1 3 200px',
  },
  button: {
    minWidth: '150px',
    maxWidth: '190px',
    width: '100%',
    background: 'red',
    marginTop: '10px',
    flex: '1 3 200px',
    color: 'white',
  },
});

const Form = () => {
  const classes = useStyles();
  const [data, getData] = useState();
  const [city, setCity] = useState('tbilisi');
  const [country, setCountry] = useState('georgia');
  const [click, handleClick] = useState(false);

  useEffect(() => {
    const getweather = async () => {
      await Apidata(city, country).then((res) => {
        getData(res.data);
        console.log(res.data);
      });
    };
    getweather();
    handleClick(false);
  }, [click]);

  const citychange = (value) => {
    setCity(value);
  };
  const countrychange = (value) => {
    setCountry(value);
  };

  return (
    <Box className={classes.mainbox}>
      <Box className={classes.box}>
        <TextField
          label="Country"
          placeholder="Country"
          onChange={(e) => countrychange(e.target.value)}
          inputProps={{ className: classes.inputs }}
        />
        <TextField
          label="City"
          inputProps={{ className: classes.inputs }}
          onChange={(e) => citychange(e.target.value)}
          placeholder="City"
        />
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => handleClick(true)}
        >
          Get weather
        </Button>
      </Box>
      <Information data={data} />
    </Box>
  );
};

export default Form;
