import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Header from './components/Header/Header';
import Home from './Pages/Home';
import Trucks from './Pages/Trucks';
import Cart from './Pages/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const showCart = () => {
    setCartIsVisible(true);
  };
  const hideCart = () => {
    setCartIsVisible(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCart} />
      {cartIsVisible && <Cart onHideCart={hideCart} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
