import React, { useState } from 'react';
import { Table, Column } from 'react-virtualized';
import 'react-virtualized/styles.css'; // Import react-virtualized styles
import Action from './Action'; // Import the Action component
import './Order.css';

const OrderList = () => { 
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const orders = [
    { id: 1, name: 'Order 1' },
    { id: 2, name: 'Order 2' },
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
         <div className={`modal fade ${showModal ? 'show' : ''}`} id="categoryModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add New Category</h5>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                {/* Add your form or content for adding a new category */}
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                {/* Add Save button or any other action buttons */}
                </div>
            </div>
            </div>
        </div>
      {/* <div className="order-list-container"> */}
        <div className="add-new-button">
          {/* Open the modal when the "Add New" button is clicked */}
          <button onClick={openModal}>Add New</button>
        </div>

        {/* Pass showModal and closeModal functions as props to the Action component */}
        {showModal && <Action showModal={showModal} closeModal={closeModal} />}

        <div className="order-list-container">
          <Table
            width={600}
            height={400}
            headerHeight={20}
            rowHeight={30}
            rowCount={orders.length}
            rowGetter={({ index }) => orders[index]}
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
      {/* </div> */}
    </React.Fragment>
  );
};

export default OrderList;
