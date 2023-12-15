import React, { useState } from 'react';
import { Table, Column } from 'react-virtualized';
import 'react-virtualized/styles.css';
import './Category.css';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  

  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    // Add more categories as needed
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
        <Link to="/admin/category/create-new">Add New</Link>
      </div>

      <div className="category-list-container">
        <Table
          width={600}
          height={400}
          headerHeight={20}
          rowHeight={30}
          rowCount={categories.length}
          rowGetter={({ index }) => categories[index]}
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

export default CategoryList;
