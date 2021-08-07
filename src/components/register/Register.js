import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Visibility } from '@material-ui/icons';
import register from './register.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
function Register() {
  const [show, setShow] = useState('password');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const usenav = useNavigate();

  async function signup() {
    console.log(name, email);
    let item = { name, email, password, password_confirmation };
    console.log(item);
    let result = await fetch('http://159.65.126.180/api/register', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    
    }).then(res => {
      if (res.ok) {
        localStorage.setItem('user-info', JSON.stringify(result));
        usenav('/home');
        result = result.json();
      }
    })
   
    
  }

  function shows() {
    if (show === 'password') {
      setShow('text');
    } else if (show === 'text') {
      setShow('password');
    
    }
  }

  return (
    <Form className="main" >
      <h2>create new account</h2>
      <Input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="show">
        <Input
          id="password"
          type={show}
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label for="password" onClick={shows} className="labels">
          <Visibility />
        </Label>
      </div>
      <Input
        type="password"
        placeholder="password confirm"
        value={password_confirmation}
        onChange={(e) => setPassword_confirmation(e.target.value)}
      />
      <Button onClick={signup}>Register</Button>
    </Form>
  );
}
export default Register;
