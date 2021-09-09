/* import { Grid, CssBaseline } from '@material-ui/core';
import Lists from './component/list/Lists';
import Header from './component/Header/Header';
import Map from './component/map/Map';
import { getPlacesdata } from './api/';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  
  
  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    )
  }, []);

  useEffect(() => {
    console.log(bounds, coordinates)
    getPlacesdata()
      .then((data) => {
      
      setPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={1} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <Lists places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
*/
import React from 'react';
import Layoutt from './Layoutt';
import { Dataprovider } from './page/Product/Dataprovider';


const App = () => {
  return (
    <Dataprovider>
    <div>
      <Layoutt />
      </div>
      </Dataprovider>
  );
};

export default App;
