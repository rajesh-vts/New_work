import React from 'react';
import { Table, Column } from 'react-virtualized';
import 'react-virtualized/styles.css'; // Import react-virtualized styles
// import Action from './Action'; // Import the Action component
import { Link } from 'react-router-dom';
import './Product.css';

const ProductList = () => {

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
  ];

  const actionsCellRenderer = () => (
    <div>
      <button className="btn btn-primary">Edit</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  );

  return (
    <React.Fragment>
        
      <div>
        <Link to="/admin/product/create-new">Add New</Link>
      </div>

      <div className="product-list-container">
        <Table
          width={600}
          height={400}
          headerHeight={20}
          rowHeight={30}
          rowCount={products.length}
          rowGetter={({ index }) => products[index]}
        >
          <Column label="ID" dataKey="id" width={100} />
          <Column label="Name" dataKey="name" width={200} />
          <Column
            label="Actions"
            dataKey="actions"
            width={200}
            cellRenderer={actionsCellRenderer}
          />
        </Table>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
