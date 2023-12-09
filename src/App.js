import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Routes, Route, Router} from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import AdminRoutes from './routes/admin';
// import CustomerRoutes from './routes/customer';
import OrderList from './components/Orders/list.js';
import ProductList from './components/Products/list.js';

import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            {/* Define your admin routes */}
            {/* <AdminRoutes path="/dashboard" exact>
            <OrderList />
            </AdminRoutes> */}
            <Route path="/admin/*" element={<AdminRoutes />} />
            {/* You can add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
