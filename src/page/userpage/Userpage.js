import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from '../../componentss/Navbar';

const Userpage = () => {
  function handleFile(event) {
    console.log(event.target.files[0]);
  }
  const data = JSON.stringify(localStorage.getItem('data'));
  let comments = JSON.parse(localStorage.getItem('user-info'));
  console.log(comments);
  return (
    <>
      <Navbar />
    <Grid container className="users">
      <Grid item md={10} sm={11} xs={12}>
        <img src={comments.user.avatar} />
        <input type="file" onChange={handleFile} />

        <h3>
          id: &nbsp; <h4>{comments.user.id}</h4>
        </h3>
        <h3>
          name:<h4> &nbsp;{comments.user.name}</h4>
        </h3>
        <h3>
          email: &nbsp;<h4>{comments.user.email}</h4>
        </h3>
      </Grid>
      </Grid>
      </>
  );
};

export default Userpage;
