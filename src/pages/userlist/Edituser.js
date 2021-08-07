import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Edituser() {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="enter Name"></Input>

        <Label> last Name</Label>
        <Input type="text" placeholder="enter Lastname "></Input>

        <Label>age</Label>
        <Input type="number"></Input>

        <Label>@mail</Label>
        <Input type="email"></Input>
      </FormGroup>
      <Button type="submit">Edit</Button>
      <Link to="/Userlist" className="btn">
        cancel
      </Link>
    </Form>
  );
}
