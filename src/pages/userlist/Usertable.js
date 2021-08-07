import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import './usertable.css';
import { Globalcontext } from '../../components/globalstate/Globalstate';
import { Grid } from '@material-ui/core';

export const Usertable = () => {
  const { users, removeuser } = useContext(Globalcontext);
  console.log(users);
  return (
    <Grid container className="listgroup">
      {users.map((user) => (
        <ListGroupItem className="listitem">
          <strong>
            <p>Name :</p>{user.name}
          </strong>
          <strong>
            <p>Last Name :</p>
            {user.lastName}
          </strong>
          <strong>
            <p>age :</p>{user.age}
          </strong>
          <strong>
            <p>email :</p>{user.email}
          </strong>
          <div className="buttons" className="buttons">
            <Button id="edit">
              <Link to={`/edit/${user.id}`} id="edit">
                Edit
              </Link>
            </Button>
            <Button id="delete" onClick={() => removeuser(user.id)}>
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </Grid>
  );
};
