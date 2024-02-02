import React, { useState } from 'react';
import RegisterForm from '../RegisterForm/RegisterForm'; // Adjust the path as necessary
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is imported for modal functionality

function RegisterPage() {
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <button className="btn btn-primary" onClick={toggleModal}>
        Register
      </button>

      {/* Bootstrap Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalLabel">Register</h5>
              <button type="button" className="btn-close" onClick={toggleModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Backdrop for modal */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
}

export default RegisterPage;
