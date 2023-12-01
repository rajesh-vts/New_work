import React, { useState } from 'react';
import { Table, Column } from 'react-virtualized';
import 'react-virtualized/styles.css'; // Import react-virtualized styles
import Action from './Action'; // Import the Action component
import './Category.css';

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
        <button >Add New</button>
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
