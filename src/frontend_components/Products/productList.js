import React from 'react';
import productList from './api'; 
import './main.css'; 


const ProductListView = () => {
  return (
    <div className="product-list-page">
      <div className="filters">
        {/* Add your filter components here */}
        <p>Filter 1</p>
        <p>Filter 2</p>
        {/* Add more filters as needed */}
      </div>
      <div className="products">
        {productList.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListView;
