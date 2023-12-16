import React from 'react';
import { Routes, Route} from 'react-router-dom';

import CategoryList from '../components/Categories/list.js';
import CategoryAction from '../components/Categories/Action.js';
import ProductList from '../components/Products/list.js';
import ProductAction from '../components/Products/Action.js';
import OrderList from '../components/Orders/list.js';
import CustomerList from '../components/Customers/list.js';
import CustomerAction from '../components/Customers/Action.js';
import CustomersData from '../components/Customers/customerData.js';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/categories" element={<CategoryList />} />
      <Route path="/category/create-new" element={<CategoryAction />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/create-new" element={<ProductAction />} />
      <Route path="/orders" element={<OrderList />} />
      <Route path="/customers" element={<CustomerList />} />
      <Route path="/create-customers" element={<CustomerAction />} />
      <Route path="/customers-data" element={<CustomersData />} />
    </Routes>
  );
}

export default AdminRoutes;
