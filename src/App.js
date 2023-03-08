import React, { Component } from 'react';
import Home from './component/Home';
import Cart from './component/Cart';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
import { Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div>
      <Navigation/>
      <Routes>
        <Route exact path="/marketplace-react/" element={<Home />}/>
        <Route exact path="/marketplace-react/cart" element={<Cart />}/>
      </Routes>
      <Footer/>
    </div> 
    </div>
  );
}

export default App;
