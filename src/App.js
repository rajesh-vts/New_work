import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import CategoryList from './components/Categories/list.js';
import ProductList from './components/Products/list.js';
import OrderList from './components/Orders/list.js';
import Home from './frontend_components/Home/Home.js';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/add-product" element={<CategoryList />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/pending-orders" element={<CategoryList />} />
            <Route path="/order-reviews" element={<CategoryList />} />
           
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
