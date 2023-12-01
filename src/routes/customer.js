import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../frontend_components/Home/Home.js';
function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default CustomerRoutes;
