import React from 'react';
// import '../../App.css';

const Home = () =>{
    return (
        <div className="home-page">
          <div className="banner">
            {/* Your banner content goes here */}
            <h1>Welcome to our Modern Fashion Store!</h1>
            <p>Discover the latest trends and styles.</p>
          </div>
    
          <div className="categories">
            {/* Category items go here */}
            {/* Example: Women's Fashion, Men's Fashion, Accessories */}
          </div>
    
          <div className="top-picks">
            {/* Display top pick items */}
          </div>
    
          <div className="top-products">
            {/* Display top products */}
          </div>
        </div>
      );
}

export default Home;
