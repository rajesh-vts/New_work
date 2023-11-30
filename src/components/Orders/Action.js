import React from 'react';

const Action = ({ showModal, closeModal }) => {
  // You can use showModal and closeModal to control the modal visibility and functionality

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        {/* Modal content for adding new items or editing */}
        <h2>Add New Category</h2>
        {/* Add form or content for adding new category */}
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default Action;
