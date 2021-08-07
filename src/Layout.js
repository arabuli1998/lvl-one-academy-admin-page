import React, { Component } from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import Userpage from './pages/home/userpages/Userpage';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Userlist from './pages/userlist/Userlist';
import Adduser from './pages/userlist/Adduser';
import Edituser from './pages/userlist/Edituser';
import { Globalprovider } from './components/globalstate/Globalstate';
import Footer from './components/footerbar/Footer';
import './layout.css';
import Register from './components/register/Register';
import Login from './components/loginpage/Login';
import LogReg from './pages/firstpage/LogReg';



class Layout extends Component {
 

  render() {
   
    return (
      <Globalprovider>
        <Router>
          

          <div id="container">
           
            <Routes>
           
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/" exact>
                <LogReg />
              </Route>
              <Route path="/userpage">
                <Userpage />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
             <Route path="/userlist">
                <Userlist />
              </Route>
              <Route path="/adduser">
                <Adduser />
              </Route>
              <Route path="/edit/:id">
                <Edituser />
              </Route>
            </Routes>
          </div>
        
        </Router>
      </Globalprovider>
    );
  }
}
export default Layout;
