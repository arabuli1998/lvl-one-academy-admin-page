import React, { useState, useContext } from 'react';
import { DataContext } from './Dataprovider';
import { useParams } from 'react-router-dom';
import ViewComfy from '@material-ui/icons/ViewComfy';
import Apps from '@material-ui/icons/Apps';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Link } from 'react-router-dom';
import Slide from '../../componentss/slider/Slide';
import Navbar from '../../componentss/Navbar';

import { Grid, makeStyles, Button, Box } from '@material-ui/core';
const useStyles = makeStyles({
  dark: {
    background: 'rgb(60,60,60)',
    color: 'white',
  },

  light: {
    background: 'rgb(240,240,240)',
    color: 'black',
  },

  firstitem: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '30px',
    flexWrap: 'wrap',
  },

  products: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '15px 0',
    alignItems: 'center',
  },

  card: {
    maxWidth: '400px',
    width: '100%',
    overflow: 'hidden',
    height: '600px',
    boxShadow: '0 0 5px #ccc',
    padding: '15px',
    margin: '15px 0',
    cursor: 'pointer',
  },

  cardimg: {
    width: '100%',
    height: '100%',
    maxHeight: '350px',
    display: 'block',
    objectFit: 'cover',
  },

  box: {
    margin: '15px 0',
  },

  boxh3: {
    textTransform: 'uppercase',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },

  boxp: {
    margin: '10px 0',
    lineHeight: '1.5',
  },

  boxh4: {
    color: 'crimson',
  },

  button: {
    width: '100%',
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    padding: '10px 0',
    margin: '10px 0',
    cursor: 'pointer',
    textTransform: 'uppercase',
    leterSpacing: '2px',
  },
});

export default function Products() {
  const [products, setProducts] = useContext(DataContext);
  console.log(products);

  const [color, setColor] = useState('');
  const [colors, setColors] = useState('#333');
  const [grids, setGrids] = useState('4');
  const classes = useStyles();

  return (
    <>
      <Navbar />
    <Grid
      container
      className={classes.container}
      style={{ background: `${color}` }}
    >
  
      <Slide />
      <Grid item xs={12} className={classes.firstitem}>
        <Box className={classes.FirstItemBox1}>
          <Button
            className={classes.dark}
            onClick={() => {
              setColor('rgb(60,60,60)');
              setColors('#fff');
            }}
          >
            Dark
          </Button>
          <Button
            className={classes.light}
            onClick={() => {
              setColor('white');
              setColors('#333');
            }}
          >
            Light
          </Button>
        </Box>

        <Box className={classes.FirstItemBox2}>
          <Button
            className={classes.light}
            onClick={() => {
              setGrids(3);
            }}
          >
            <ViewComfy />
          </Button>
          <Button
            className={classes.light}
            onClick={() => {
              setGrids(4);
            }}
          >
            <Apps />
          </Button>
          <Button
            className={classes.light}
            onClick={() => {
              setGrids(12);
            }}
          >
            <ViewColumn />
          </Button>
        </Box>
      </Grid>
      {products.map((product) => (
        <Grid
          item
          sm={`${grids}`}
          xs={12}
          className={classes.products}
          key={product._id}
        >
          <Box className={classes.card}>
            <Link to={`/products/${product._id}`}>
              <img src={product.images[0]} alt="" className={classes.cardimg} />
            </Link>
            <Box className={classes.box}>
              <h3 title="Watches" className={classes.boxh3}>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
              </h3>
              <p className={classes.boxp} style={{ color: `${colors}` }}>
                {product.description}
              </p>
              <h4 className={classes.boxh4}>$ {product.price} </h4>
              <Button
                className={classes.button}
                style={{ background: `${colors}`, color: `${color}` }}
              >
                add to cart
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
      </Grid>
      </>
  );
}
