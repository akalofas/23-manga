// src/features/auth/authService.js
import { users } from '../../data/dummyData'; // Make sure this path is correct

// Helper function to validate email format
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const register = async (userData) => {
  try {
    // Simulated delay to mimic a real network request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { username, email, password } = userData;

    // Check if the username or email already exists
    if (users.some(user => user.username === username)) {
      throw new Error('Username already taken');
    }
    if (users.some(user => user.email === email)) {
      throw new Error('Email already in use');
    }

    // Validate password length
    if (password.length < 8 || password.length > 16) {
      throw new Error('Password must be between 8 and 16 characters');
    }

    // Validate email format
    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    // Simulate user ID assignment and user creation
    const newUser = {
      ...userData,
      id: users.length + 1, // Simulate assigning a unique ID
      enabled: true, // Default to true
      userRole: 'user', // Default role
    };

    // This would be where you actually add the user to your backend/database
    users.push(newUser); // For simulation purposes only

    return newUser;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    // Simulated delay to mimic a real network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
 
    const { email, password } = credentials;
    const user = users.find(user => user.email === email);

    // Check if user is enabled
    if (user && !user.enabled) {
      throw new Error('User is disabled');
    }

    // Proceed with email and password check
    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }

    // Success, return user (excluding password)
    return {
      ...user,
      password: undefined, // Exclude the password for security reasons
    };
  } catch (error) {
    throw error;
  }
};
