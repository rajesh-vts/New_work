import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
// import Sidebar from './components/layout/sidebar';
import AdminRoutes from './routes/admin';
import CustomerRoutes from './routes/customer';

import './App.css'; 

function App() {
  return (
    <Router>
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          {/* Your other non-admin routes */}
          {/* ... */}
          {/* Include the admin routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/" element={<CustomerRoutes />} />
        </Routes>
      </main>
    </div>
  </Router>
  );
}

export default App;
