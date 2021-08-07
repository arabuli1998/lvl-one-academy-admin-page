import  { createContext, useReducer } from 'react';
import Appred from './Appred';

const initialstate = {
  users: [
    {
      id: 1,
      name: 'name1',
      lastName: 'aleqsidze',
      age: 23,
      email: 'gio@gmail.com',
    },
    {
      id: 2,
      name: 'name2',
      lastName: 'peto',
      age: 33,
      email: 'gio@gmail.com',
    },
    {
      id: 3,
      name: 'name3',
      lastName: 'last name',
      age: 15,
      email: 'gio@gmail.com',
    },
    {
      id: 4,
      name: 'giorgi',
      lastName: 'rozali',
      age: 54,
      email: 'gio@gmail.com',
    },
    {
      id: 5,
      name: 'zura',
      lastName: 'last name',
      age: 35,
      email: 'gio@gmail.com',
    },
  ],
};
// konteksti
export const Globalcontext = createContext(initialstate);

//provaideri
export const Globalprovider = ({ children }) => {
  const [state, dispatch] = useReducer(Appred, initialstate);
  //mokmedeba washlis
  const removeuser = (id) => {
    dispatch({
      type: 'washale',
      payload: id,
    });
    };
    
    //damateba axalis
    const adduser = (user) => {
        dispatch({
          type: 'adduser',
          payload: user,
        })
    };
    
    //edit
    const edituser = (user) => {
        dispatch({
            type: 'edituser',
            payload:user
        })
    }

  return (
    <Globalcontext.Provider
      value={{
              users: state.users,
              removeuser,
              adduser,
              edituser
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
};
