/*
import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginPage = (props) => {
  const loginPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)"
  };
  const { touched, errors } = props;
  return(
    <React.Fragment>
      <div className="container">
        <div className="login-wrapper" style={loginPageStyle}>
          <h2>Login Page</h2>
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" className={"form-control"} placeholder="Email" />
              { touched.email && errors.email && <span className="help-block text-danger">{errors.email}</span> }
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className={"form-control"} placeholder="Password"  />
              { touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span> }
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
}

const LoginFormik = withFormik({
  mapPropsToValues: (props) => {
    return {
      email: props.email || '',
      password: props.password || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().required('Password is required')
  }),
  handleSubmit: (values) => {
    
    fetch("http://159.65.126.180/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(values)
      
    }).then(response => {
      console.log(values.email)
      if (response.ok) {
        return response.json();
      } else {
        // HANDLE ERROR
        throw new Error('Something went wrong');
      }
    }).then(data => {
      if (data.user.email  && data.user.password) {
        console.log('great')
      } else {
        console.log('stupid')
      }
     
    }).catch((error) => {
      // HANDLE ERROR
      console.log(error);
    });
  }
})(LoginPage);

export default LoginFormik
*/
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
 
  Facebook,
  Mail,
  Twitter,
} from '@material-ui/icons';
import login from './login.css';
import { Grid } from '@material-ui/core';

const Login = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
 
  const [password, setPassword] = useState('');
  const usenav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      usenav('/login');
    }
  }, []);
  async function loggin() {
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
        }
      })
      .then((data) => {
        localStorage.setItem("user-info", JSON.stringify(data));
        if (data) {
          usenav('/home');
        } else {
          setLogin('something went wrong');
        }
      });
  }
  return (
    <Grid container className="main1">
      
      <Grid item xs={12} lg={4} sm={4} className="main">
      <div className="inputs">
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
giorgi@gm.com
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loggin}>log in</button>
        </div>

        <h1>{login}</h1>
        <div className="reg">
          <h4>have not account?</h4>
          <h3><Link to="/register" className="h3">Register</Link></h3>
        </div>
        <div className="log">
          <Facebook />
          <Mail />
          <Twitter />
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
