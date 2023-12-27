import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import AdminRoutes from './routes/admin';
import CustomerRoutes from './routes/customer';

import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app">
          <Routes>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/*" element={<CustomerRoutes />} />
          </Routes>
      </div>
    </Router>
  );
}
const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/*" element={<AdminRoutes />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
