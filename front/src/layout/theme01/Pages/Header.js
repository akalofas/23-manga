import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkLight, selectDarkLightToggle } from '../../../features/darkLightToggle/darkLightToggleSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // Assuming you create a custom CSS file

function Header() {
  const dispatch = useDispatch();
  const darkLightToggle = useSelector(selectDarkLightToggle);

  return (
    <header className="header d-flex justify-content-between align-items-center px-3" style={{ height: '60px', width: '100%' }}>
      <div className="logo">Site Logo</div>
      <div className="search-bar flex-grow-1 mx-2">
        <input type="text" className="form-control" placeholder="Search..." style={{ width: '75%', margin: '0 auto' }} />
      </div>
      <div className="theme-switch">
        <FontAwesomeIcon
          icon={darkLightToggle === 'light' ? faMoon : faSun}
          onClick={() => dispatch(toggleDarkLight())}
          role="button"
        />
      </div>
    </header>
  );
}

export default Header;
