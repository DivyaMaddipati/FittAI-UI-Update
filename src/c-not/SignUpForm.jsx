// import React from 'react';
// import './Form.css'
// import { Link } from 'react-router-dom';
// const SignUpForm = () => {
//   return (
//     <div id="container">
//       <div className="form-wrap">
//         <h1>Sign Up</h1>
//         <p>It's free and only takes a minute</p>
//         <form>
//           <div className="form-group">
//             <label htmlFor="first-name">First Name</label>
//             <input type="text" name="firstName" id="first-name" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="last-name">Last Name</label>
//             <input type="text" name="lastName" id="last-name" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" name="email" id="email" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" name="password" id="password" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password2">Confirm Password</label>
//             <input type="password" name="password2" id="password2" />
//           </div>
//           <button type="submit" className="btn">Sign Up</button>
//           <p className="bottom-text">
//             By clicking the Sign Up button, you agree to our
//             <a href="#">Terms & Conditions</a> and
//             <a href="#">Privacy Policy</a>
//           </p>
//         </form>
//       </div>
//       <footer>
//         <p>Already have an account? <Link to="/login">Login Here</Link></p>
//       </footer>
//     </div>
//   );
// };

// export default SignUpForm;


import React, { useState } from 'react';
// import './Form.css';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data here
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.password2) {
      newErrors.password2 = 'Passwords do not match';
    }
    setErrors(newErrors);

    // If there are no errors, store data in local storage (for demo purposes)
    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem('user', JSON.stringify(formData));
      alert('Registration successful! You can now login.');
    }
  };

  return (
    <div id="container">
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>It's free and only takes a minute</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="firstName"
              id="first-name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="last-name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              name="password2"
              id="password2"
              value={formData.password2}
              onChange={handleInputChange}
            />
            {errors.password2 && <p className="error">{errors.password2}</p>}
          </div>
          <button type="submit" className="btn">
            Sign Up
          </button>
          <p className="bottom-text">
            By clicking the Sign Up button, you agree to our
            <a href="#">Terms & Conditions</a> and
            <a href="#">Privacy Policy</a>
          </p>
        </form>
      </div>
      <footer>
        <p>
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
      </footer>
    </div>
  );
};

export default SignUpForm;

