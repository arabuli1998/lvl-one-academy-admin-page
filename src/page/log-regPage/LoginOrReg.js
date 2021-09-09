import React, { useState, useEffect } from 'react';
import { Grid, Box,Button } from '@material-ui/core';
import { useNavigate } from 'react-router';
import { Facebook } from '@material-ui/icons';

const LoginOrReg = () => {
  const [login, setLogin] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');

  const usenav = useNavigate();

  function signp() {
    console.log(name, email);
    let user = { name, email, password, password_confirmation };
    console.log(user);
    let result = fetch('http://159.65.126.180/api/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          result = res.json();
          localStorage.setItem('user-info', JSON.stringify(res));
          usenav('/home');
        } else {
          setLogin('something went wrong');
        }
      })
      .then((data) => {
        localStorage.setItem('user-info', JSON.stringify(data));
      });
  }

  async function Login() {
    console.log('gio');
    let item = { email, password };
    await fetch('http://159.65.126.180/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log('Something went wrong');
          setLogin('something went wrong');
        }
      })
      .then((data) => {
        if (data) {
          localStorage.setItem('user-info', JSON.stringify(data));
          usenav('/home');
          console.log(data.token);
          console.log(data.user.avatar);
        } else {
          setLogin('something went wrong');
        }
      });
  }

  return (
    <Grid container className="firstpage">
      <Grid item lg={7} sm={7} xs={12} className="firstpage-grid">
        <h1>Dont have an acount?</h1>

        <h5>
          Register to accses all the information, about me <br />
          It's free!!
        </h5>
        <Box>
          <a href="https://www.facebook.com/giorgi.arabuli.1998/">
            <Facebook className="facebook-buttn" />
          </a>
        </Box>
      </Grid>
      <Grid item lg={5} sm={5} xs={12} className="firstpage-second-grid">
        <h2>Sign up</h2>
        <form className="firstpage-form">
          <input
            type="email"
            placeholder="Email Adress"
            onChange={(e) => setEmail(e.target.value)}
          />
          giorgi@gm.com
          <div className="firstpage-form-div">
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>
          123456
          <h1>{login}</h1>
          <Button onClick={Login}>Sign in</Button> or
          <label for="check" className="label">
            Register
          </label>
        </form>
      </Grid>
      <input type="checkbox" id="check"></input>
      <Grid container className="modaal">
        <Grid item xs={12} sm={10} md={7} className="modal-header">
          <h2>Register</h2>
          <label for="check">
            <h2>X</h2>
          </label>
        </Grid>

        <Grid item xs={12} sm={10} md={7} className="modal-body">
          <form>
            <h2>create new account</h2>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="password confirm"
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
            />

            <h1>{login}</h1>
          </form>
          <button onClick={signp}>Register</button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginOrReg;
