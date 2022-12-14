import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Thanks from './pages/Thanks';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Home />} />
      <Route path="/search/:term" element={<Home />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  );
}

export default App;
