import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../frontend_components/Home/Home.js';
import ProductListView from '../frontend_components/Products/productList.js';
import Layout from '../frontend_components/Common/Layout.js';
function CustomerRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/products/:category_slug" element={<ProductListView />} />
        <Route path="products/:product_slug" element={<ProductListView />} />
      </Routes>
    </Layout>
    
  );
}

export default CustomerRoutes;
