import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage'; // Assume you have a HomePage component
import RegisterPage from '../components/RegisterPage/RegisterPage'; // Assume you have a RegisterPage component
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'; // Assume you have a NotFoundPage component
import { selectDarkLightToggle } from '../features/darkLightToggle/darkLightToggleSlice';
import Theme01 from '../layout/theme01/index';

function App() {
  const darkLightToggle = useSelector(selectDarkLightToggle);

  return (
    <div className="App">
      <div className={darkLightToggle} data-theme={darkLightToggle}>
        <Theme01 />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
