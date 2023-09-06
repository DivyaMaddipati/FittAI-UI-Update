import React, { useState } from 'react';
import './SignIn.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
// import CustomAlert from './CustomAlert';
import Gender from './Gender'

const SignInSignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // setShowAlert(true);
    e.preventDefault();

    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the user exists in local storage
    if (storedUser) {
      // Check if the entered username and password match the stored data
      if (
        formData.username === storedUser.email &&
        formData.password === storedUser.password
      ) {
        // Authentication successful - display a success message
        setError('');
        alert('Authentication successful. You can proceed.');
        // window.location.href = '/gender';

      } else {
        // Authentication failed - display an error message
        setError('Invalid username or password. Please try again.');
      }
    } else {
      // User not found in local storage - display an error message
      setError('User not found. Please sign up.');
    }
  };

  return (
    <div className="signin-container">
      <div className="card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usermail:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
          {error && <p className="error">{error}</p>}
          <Link to="/gender">Proceed</Link>
        </form>
      </div>
    </div>
  );
};

export default SignInSignUp;
