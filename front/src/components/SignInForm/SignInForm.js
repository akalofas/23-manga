// src/features/auth/SignInForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
        const user = await dispatch(loginUser(credentials)).unwrap();
        localStorage.setItem('userInfo', JSON.stringify(user)); // Save user info excluding password
        navigate('/'); // Redirect to home page
    } catch (err) {
      setError(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" required value={credentials.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" required value={credentials.password} onChange={handleChange} />
      </div>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
  );
}
