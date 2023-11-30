import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Dashboard = () => {
  // Sample state to hold data
  const [data, setData] = useState({
    totalRevenue: 0,
    todayRevenue: 0,
    thisMonthRevenue: 0,
    totalProducts: 0,
    soldProducts: 0,
  });

  // Simulated data fetching or API call
  useEffect(() => {
    // Simulated data - replace with actual fetching logic
    // Example: Fetch data from API
    const fetchData = async () => {
      // Simulated API response
      const apiData = {
        totalRevenue: 5000,
        todayRevenue: 800,
        thisMonthRevenue: 3000,
        totalProducts: 150,
        soldProducts: 75,
      };
      // Set the fetched data to state
      setData(apiData);
    };

    // Fetch data
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome to Dashboard</h2>
      <div className="card-container">
        <div className="card">
          <h3>Total Revenue</h3>
          <p>${data.totalRevenue}</p>
        </div>
        <div className="card">
          <h3>Today's Revenue</h3>
          <p>${data.todayRevenue}</p>
        </div>
        <div className="card">
          <h3>This Month's Revenue</h3>
          <p>${data.thisMonthRevenue}</p>
        </div>
        <div className="card">
          <h3>Total Products</h3>
          <p>{data.totalProducts}</p>
        </div>
        <div className="card">
          <h3>Sold Products</h3>
          <p>{data.soldProducts}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
