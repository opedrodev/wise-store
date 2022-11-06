import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Home />} />
      <Route path="search/:term" element={<Home />} />
    </Routes>
  );
}

export default App;
