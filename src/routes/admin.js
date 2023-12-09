import React from 'react';
import { Routes, Route} from 'react-router-dom';

import CategoryList from '../components/Categories/list.js';
import ProductList from '../components/Products/list.js';
import OrderList from '../components/Orders/list.js';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/categories" element={<CategoryList />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/orders" element={<OrderList />} />
    </Routes>
  );
}

export default AdminRoutes;
