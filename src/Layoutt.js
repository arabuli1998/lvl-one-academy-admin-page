import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/homePage/Home';
import Navbar from './componentss/Navbar';
import ContactPage from './page/contacts/ContactPage';
import LoginOrReg from './page/log-regPage/LoginOrReg';
import Userpage from './page/userpage/Userpage';
import EachProduct from './page/Product/EachProduct';
import Weather from './page/weatherPage/Weather';
import Products from './page/Product/Products';
import BottomBar from './componentss/bottomBar/BottomBar';
import Info from './page/InfoPage/Info'


const Layoutt = () => {
  return (
    <Router>
      
        <Routes>
                          
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/contacts">
          <ContactPage />
        </Route>

        <Route path="/">
          <LoginOrReg />
        </Route>

        <Route path="user-page">
          <Userpage />
        </Route>

        <Route path="weather">
          <Weather />
        </Route>

        <Route path="products">
          <Products />
        </Route>
                          
        <Route path="products">
          <Products />
        </Route>
                          
        <Route path="products/:id">
          <EachProduct />
        </Route>
        <Route path="infromation">
          <Info />
        </Route>
        
                          
                  </Routes>
                  <BottomBar />
    </Router>
  );
};

export default Layoutt;
