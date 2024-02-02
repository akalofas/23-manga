import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/selectors/authSelectors';

const UserProfileModal = ({ isOpen, onClose }) => {
  const user = useSelector(selectUser); // Assuming this selector exists and fetches the current user
  
  // Modal JSX using Bootstrap classes
  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="userProfileModalLabel">User Profile</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* Display user information */}
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.userRole}</p>
            <p>Date Of Birth: {user.dateOfBirth}</p>
            <p>Gender: {user.gender}</p>
            {/* Additional user info */}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
