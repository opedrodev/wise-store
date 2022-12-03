import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Home />} />
      <Route path="/search/:term" element={<Home />} />
      <Route path="/details/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
