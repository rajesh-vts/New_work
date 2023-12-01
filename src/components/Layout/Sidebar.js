import './Layout.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isCategoryOpen, setCategoryOpen] = useState(false);
    const [isProductOpen, setProductOpen] = useState(false);
    const [isOrdersOpen, setOrderOpen] = useState(false);
    const [isSettingsOpen, setSettingsOpen] = useState(false);
  
    const toggleCategory = () => {
      setCategoryOpen(!isCategoryOpen);
      if (isProductOpen) {
        setProductOpen(false);
      }
    };
  
    const toggleProduct = () => {
      setProductOpen(!isProductOpen);
      if (isCategoryOpen) {
        setCategoryOpen(false);
      }
    };
    const toggleOrder = () =>{
        setOrderOpen(!isOrdersOpen);
        if (isOrdersOpen) {
            setOrderOpen(false);
          }
    }
    const togglSettings = () =>{
      setSettingsOpen(!isSettingsOpen);
        if (isSettingsOpen) {
          setSettingsOpen(false);
          }
    }
  
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="" alt="Logo" />
        </div>
        <ul className="menu-list">
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li onClick={toggleCategory}>
            Categories
            {isCategoryOpen ? (
              <ul className="sub-menu">
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/add-new-category">Add New Category</Link></li>
              </ul>
            ) : null}
          </li>
          <li onClick={toggleProduct}>
            Products
            {isProductOpen ? (
              <ul className="sub-menu">
                <li><Link to="/admin/products">Products</Link></li>
                <li><Link to="/add-product">Add New Product</Link></li>
              </ul>
            ) : null}
          </li>
          <li onClick={toggleOrder}>
            Orders
            {isOrdersOpen ? (
              <ul className="sub-menu">
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/pending-orders">Pending Orders</Link></li>
                <li><Link to="/order-reviews">Order Reviews</Link></li>
              </ul>
            ) : null}
          </li>
          <li onClick={togglSettings}>
            Settings
            {isSettingsOpen ? (
              <ul className="sub-menu">
                <li><Link to="/global-settings">Global Settings</Link></li>
                <li><Link to="/home-page">Home Page</Link></li>
              </ul>
            ) : null}
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
