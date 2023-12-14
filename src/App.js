import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import AdminRoutes from './routes/admin';
// import CustomerRoutes from './routes/customer';

import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
