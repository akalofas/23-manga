import React, { useState } from 'react';
import SignInForm from '../SignInForm/SignInForm'; // Adjust the path as necessary

function SignInPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button type="button" className="btn btn-secondary" onClick={() => setShowModal(true)}>
        Sign In
      </button>

      <div className={`modal ${showModal ? 'd-block' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign In</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <SignInForm />
            </div>
          </div>
        </div>
      </div>

      {showModal ? <div className="modal-backdrop fade show"></div> : null}
    </>
  );
}

export default SignInPage;
