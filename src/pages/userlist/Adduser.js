import React,{useState,useContext} from 'react';
import { Link} from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Globalcontext } from '../../components/globalstate/Globalstate';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid'
import Topbar from '../../components/topbar/Topbar';

export default function Adduser() {
  const { adduser } = useContext(Globalcontext);
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/Userlist')
       
    const newuser = {
      id: uuid(),
      name: name,
      lastName:lastName,
      age: age,
      email:email
    }
    adduser(newuser);
    
}
  const onChange = (e) => {
    setName(e.target.value)
    
  }
  const changelastname = (e) => {
    setLastName(e.target.value)
  }
  const changeage = (e) => {
    setAge(e.target.value)
  }
  const changemail = (e) => {
    setEmail(e.target.value)
  }
  

  return (
    <div><Topbar />
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" onChange={onChange} placeholder="enter Name" value={name} ></Input>

        <Label> last Name</Label>
        <Input type="text" onChange={changelastname} placeholder="enter Lastname "value={lastName}></Input>

        <Label>age</Label>
        <Input type="number" onChange={changeage} value={age}></Input>

        <Label>@mail</Label>
        <Input type="email" onChange={changemail} value={email}></Input>
      </FormGroup>
      <Button type="submit" >submit</Button>
      <Link to="/Userlist" className="btn">
        cancel
      </Link>
      </Form>
      </div>
  );
}
