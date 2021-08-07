import React, { useState, useEffect } from 'react';
import './widgetsm.css';
import { Grid,Box } from '@material-ui/core';
import ViewCompact from '@material-ui/icons/ViewCompact';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Button } from '@material-ui/core';

export default function Widgetsm() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(4);
  const [size, SetSize] = useState(6);

  const showmoreitems = () => {
    setVisible((prevalue) => prevalue + 4);
  };
  const showitems = () => {
    if (visible > 4) {
      setVisible((prevalue) => prevalue - 4);
    }
  };
  const comeback = () => {
    setVisible((prevalue) => prevalue - prevalue + 4);
  };

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

 
  return (
    <Grid container className="widgetsmlist" spacing={5}>
      <Grid item xs={12}>
        <Box className="box">
          <Button onClick={() => { SetSize(12) }}> <ViewCompact /></Button>
          
        <Button  onClick={() => { SetSize(6) }}><ViewColumn/></Button>
        </Box>
      
      <h3 className="widgetsmtitle">
        new Join members
        </h3>
        </Grid>
      {items.slice(0, visible).map((item) => (
        <Grid item xs={12} lg={size} md={size} sm={12} className="widgetsmlistitem">
          <img src={item.avatar_url} className="widgetsmimg" />
          <div className="widgetsmuser">
            <span className="widgetsmusername">{item.login}</span>
            <span className="widgetsmuserTitle">{item.type}</span>
          </div>
          <button className="widgetsmbutton">display</button>
        </Grid>
      ))}
      <Grid item xs={12} className="buttons">
        <button onClick={showmoreitems}>loading more</button>
        <button onClick={showitems}>show less</button>
        <button onClick={comeback}>come back</button>
      </Grid>
    </Grid>
  );
}

