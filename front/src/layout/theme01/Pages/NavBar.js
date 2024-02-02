import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkLightToggle } from '../../../features/darkLightToggle/darkLightToggleSlice';
import { selectUserRole, selectIsAuthenticated, selectUser } from '../../../features/selectors/authSelectors';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookmark, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import RegisterPage from '../../../components/RegisterPage/RegisterPage';
import SignInPage from '../../../components/SignInPage/SignInPage';
import { logout } from '../../../features/auth/authSlice';
import UserProfileModal from '../../../components/UserProfileModal/UserProfileModal'; // Adjust the import path as necessary
import './NavBar.css'; // Assuming you have additional custom styles

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDarkMode = useSelector(selectDarkLightToggle);
  const userRole= useSelector(selectUserRole);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser)
  // State to control modal visibility
  const [isUserProfileModalOpen, setUserProfileModalOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  // Function to open the modal
  const openUserProfileModal = () => {
    setUserProfileModalOpen(true);
  };

  // Function to close the modal
  const closeUserProfileModal = () => {
    setUserProfileModalOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <div className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/comics">Comics</NavLink>
          <NavLink className="nav-link" to="/novels">Novels</NavLink>
          <NavLink className="nav-link" to="/genres">Genres</NavLink>
        </div>
        <div className="d-flex">
            {isAuthenticated && (
              <>
                <NavLink className="nav-link" to="/bookmarks"><FontAwesomeIcon icon={faBookmark} /></NavLink>
                {userRole === 'Admin' && (
                  <>
                      <NavLink className="nav-link" to="/adminPanel">Admin Panel</NavLink>
                  </>
                )}
                {userRole === 'group' && (
                  <>
                      <NavLink className="nav-link" to="/groupPanel">Group Panel</NavLink>
                  </>
                )}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle navbar-profile-dropdown " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-popper="parent">
                    <FontAwesomeIcon icon={faUser} /> Profile
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#" onClick={openUserProfileModal}>User Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button></li>
                  </ul>
                </li>
              </>
            )}
            {!isAuthenticated && (
                <>
                    <SignInPage />
                    <RegisterPage />
                </>
            )}
        </div>
      </div>
      {isAuthenticated && (<UserProfileModal isOpen={isUserProfileModalOpen} onClose={closeUserProfileModal} />)}
    </nav>
  );
}

export default NavBar;
