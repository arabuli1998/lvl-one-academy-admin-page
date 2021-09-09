import React from 'react';
import { Grid, Box, Button } from '@material-ui/core';
import Typed from 'react-typed';
import { MailOutline, Phone, LocationOn } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';

const ContactPage = () => {
  return (
    <Grid container className="contact-container">
      <Grid item xs={12} className="contact-me">
        <Typed
          className="typed-text"
          strings={['Contact Me', 'Call Me', 'or Send me an SMS']}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </Grid>
      <Grid item md={10} xs={12} sm={11} className="contact-info-grid">
        <Grid container className="contact-info-container">
          <Grid item xs={12} md={6} className="contact-info">
            <Box className="box">
              <div className="info-logo">
                <LocationOn />
              </div>
              <div>
                <h4>Adress</h4>
                <p>
                  Tbilisi, Lilo lojini <br />
                  Tbilisi, Samgori
                </p>
              </div>
            </Box>
            <Box className="box">
              <div className="info-logo">
                <Phone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>574 999 266 </p>
              </div>
            </Box>
            <Box className="box">
              <div className="info-logo">
                <MailOutline />
              </div>
              <div>
                <h4>Email</h4>
                <p> arabulianci@gmail.com </p>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="contact-sms">
            <h4>Send Message</h4>
            <form className="classes" noValidate autoComplete="off">
              <TextField
                className="standard-search"
                label="Full Name"
                type="text"
              />
              <TextField
                className="standard-search"
                label="Email"
                type="email"
              />

              <TextField
                className="outlined-multiline-static"
                label="Enter Your Message"
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" type="submit">
                {' '}
                Send{' '}
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
