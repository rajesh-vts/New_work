import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../frontend_components/Home/Home.js';
import ProductListView from '../frontend_components/Products/productList.js';
function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category_slug" element={<ProductListView />} />
    </Routes>
  );
}

export default CustomerRoutes;
