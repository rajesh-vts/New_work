import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../frontend_components/Home/Home.js';
import ProductListView from '../frontend_components/Products/productList.js';
import ProductDetail from '../frontend_components/Products/productDetail.js';
import CartListView from '../frontend_components/Cart/Cart.js';
import TermsOfUse from '../frontend_components/Common/TermsOfUse';
import PrivacyPolicy from '../frontend_components/Common/PrivacyPolicy';
import Layout from '../frontend_components/Common/Layout.js';
function CustomerRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/products/:category_slug" element={<ProductListView />} />
        <Route path="products/:product_slug" element={<ProductDetail />} />
        <Route path="cart" element={<CartListView />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Layout>
    
  );
}

export default CustomerRoutes;
