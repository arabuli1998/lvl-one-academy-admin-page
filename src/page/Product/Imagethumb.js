import React from 'react';
import { Grid } from '@material-ui/core';

export default function Imagethumb({ images, setIndex }) {
  return (
    <Grid container className="firstcol">
      <Grid item xs={3} className="imagethumb">
        {images.map((img, index) => (
          <img src={img} alt="" key={index} onClick={() => setIndex(index)} />
        ))}
      </Grid>
    </Grid>
  );
}
