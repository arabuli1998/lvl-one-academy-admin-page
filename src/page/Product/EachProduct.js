import React, { useState, useContext } from 'react';
import Products from './Products';
import { useParams } from 'react-router-dom';
import { DataContext } from './Dataprovider';
import Imagethumb from './Imagethumb';
import { Grid, Box, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  MainGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  SecondMainGrid: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 10px gray',
    marginBottom: '50px',
  },

  Images: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '20px',
  },

  image: {
    cursor: 'zoom-in',
    boxShadow: '0px 0px 10px gray',
    maxWidth: '500px',
    width: '100%',
    height: '600px',
    backgroundRepeat: 'no-repeac',
    transition: '0.5s',
    backgroundSize: 'cover',
    '&:hover': {
      backgroundSize: '170%',
    },
    backgroundPosition: 'center',
    marginBottom: '20px',
  },

  Infromation: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    height: '600px',
  },

  prices: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },

  title: {
    textTransform: 'uppercase',
  },
  price: {
    color: 'red',
  },
  AddBtn: {
    backgroundColor: 'gray',
  },
  BuyBtn: {
    color: 'red',
    fontSize: 'bold',
  },
});

export default function EachProduct() {
  const classes = useStyles();
  const { id } = useParams();
  const [products, setProducts] = useContext(DataContext);
  const [index, setIndex] = useState(0);
  const details = products.filter((product, index) => {
    return product._id === id;
  });
  console.log(details);
  return (
    <Grid container className={classes.MainGrid}>
      {details.map((product) => (
        <Grid
          container
          key={product._id}
          className={classes.SecondMainGrid}
          spacing={2}
        >
          <Grid items xs={12} sm={6} md={5} lg={4} className={classes.Images}>
            <Box
              className={classes.image}
              style={{ backgroundImage: `url(${product.images[index]})` }}
            />
            <Imagethumb
              images={product.images}
              setIndex={setIndex}
              className="images"
            />
          </Grid>

          <Grid
            items
            xs={12}
            sm={6}
            md={5}
            lg={4}
            className={classes.Infromation}
          >
            <Box className={classes.prices}>
              <h2 className={classes.title}>{product.title}</h2>
              <p>SHIRTS</p>
              <h3 className={classes.price}>${product.price}</h3>
            </Box>

            <Box className={classes.details}>
              <p className={classes.P}>
                <h4>Content: &nbsp;</h4>
                {product.content}
              </p>
              <p className={classes.P}>
                <h4>ID: &nbsp;</h4>
                {product._id}
              </p>
              <p className={classes.P}>
                <h4>Delivery: &nbsp;</h4>
                {product.delivery}
              </p>
              <nav className="nav"></nav>

              <p>{product.description}</p>
            </Box>

            <Box className={classes.buttons}>
              <Button
                className={classes.AddBtn}
                onClick={() => {
                  alert('Has been added');
                }}
              >
                Add to card
              </Button>
              <Button
                className={classes.BuyBtn}
                onClick={() => {
                  alert('There is not enough monay in your accound');
                }}
              >
                Buy now
              </Button>
            </Box>
          </Grid>
        </Grid>
      ))}
      <div className="relative">
        <h2>Relative products</h2>
      </div>
      <Products />
    </Grid>
  );
}
