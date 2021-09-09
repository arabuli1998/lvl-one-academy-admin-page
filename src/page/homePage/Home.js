import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../componentss/Navbar';
import Header from '../../componentss/Header';

const Home = () => {
  return (
    <>
      <Navbar />
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: 'white',
              },
            },
          },
        }}
      />

      <Header />
    </>
  );
};

export default Home;
