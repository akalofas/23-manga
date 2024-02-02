// src/features/auth/RegisterForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/auth/authSlice';
import { selectDarkLightToggle } from '../../features/darkLightToggle/darkLightToggleSlice';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkLightToggle) === 'dark';
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    dateOfBirth: '',
    gender: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const user = await dispatch(registerUser(userData)).unwrap();
      localStorage.setItem('userInfo', JSON.stringify({ ...user, password: undefined })); // Save user info, exclude password
      navigate('/'); // Redirect to home page
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className={`container mt-5 ${darkMode ? 'text-white bg-dark' : 'bg-light'}`} style={{ padding: '20px', borderRadius: '8px' }}>
      <h2>Register</h2>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" name="username" required value={userData.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" required value={userData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" required value={userData.password} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" value={userData.dateOfBirth} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-select" name="gender" value={userData.gender} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm