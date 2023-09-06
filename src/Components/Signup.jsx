// import React, { useState } from 'react';
// import './Signup.css'; // Import your CSS file for styling
// import { Link } from 'react-router-dom';
// // import CustomAlert from './CustomAlert';
// // import Gender from './Gender'

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });


//   const [error, setError] = useState('');

//   const [isSignInActive, setIsSignInActive] = useState(true);

//   const handleSignUpClick = () => {
//     setIsSignInActive(false);
//   };

//   const handleSignInClick = () => {
//     setIsSignInActive(true);
//   };

//   const containerClass = isSignInActive ? '' : 'right-panel-active';

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     // setShowAlert(true);
//     e.preventDefault();

//     // Retrieve user data from local storage
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     // Check if the user exists in local storage
//     if (storedUser) {
//       // Check if the entered username and password match the stored data
//       if (
//         formData.username === storedUser.email &&
//         formData.password === storedUser.password
//       ) {
//         // Authentication successful - display a success message
//         setError('');
//         alert('Authentication successful. You can proceed.');
//         // window.location.href = '/gender';

//       } else {
//         // Authentication failed - display an error message
//         setError('Invalid username or password. Please try again.');
//       }
//     } else {
//       // User not found in local storage - display an error message
//       setError('User not found. Please sign up.');
//     }
//   };

//   return ( 
//     <>
//     <h2>Sign In/Sign Up</h2>
//     <div className={`container ${containerClass}`} id="container">
//         <div className="form-container sign-up-container">

//           <form onSubmit={handleSubmit}>
//             <h1>Create Account</h1>
//             <input type="text" placeholder="Name" name="name" />
//             <input type="email" placeholder="Email" name="mail" />
//             <input type="password" placeholder="Password" name="password" />
//             <button>
//               Sign Up
//             </button>
//         </form>
//         </div>
//     <div className="signin-container">
//       <div className="card">
//       <div className="form-container sign-in-container">
//           <form onSubmit={handleSubmit}>
//             <h1>Sign in</h1>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               placeholder="Enter your username"
//               value={formData.username}
//               onChange={handleChange}
//             />
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <a href="#">Forgot your password?</a>
//             <button>Submit</button>
//             {error && <p className="error">{error}</p>}
          
//           </form>
//         </div>
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//                <h1>Welcome Back!</h1>
//               <p>To keep connected with us please login with your personal info</p>
//               <button className="ghost" id="signIn" onClick={handleSignInClick}>
//               <Link to="/gender">SignIn</Link>
//               </button>
//             </div>
//             <div className="overlay-panel overlay-right">
//             <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start the journey with us</p>
//               <button className="ghost" id="signUp" onClick={handleSignUpClick}>
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import './Signup.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    password: '',
  });

  const [error, setError] = useState('');

  const [isSignInActive, setIsSignInActive] = useState(true);

  const handleSignUpClick = () => {
    setIsSignInActive(false);
  };

  const handleSignInClick = () => {
    setIsSignInActive(true);
  };

  const containerClass = isSignInActive ? '' : 'right-panel-active';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignInActive) {
      // Sign In
      const { mail, password } = formData;

      // Retrieve registered users from local storage
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

      // Check if the entered credentials match any registered user
      const user = registeredUsers.find((user) => user.mail === mail && user.password === password);

      if (user) {
        // Authentication successful - display a success message and redirect
        setError('');
        alert('Authentication successful. You can proceed.');
        // Redirect or update state to show the authenticated user's content
      } else {
        // Authentication failed - display an error message
        setError('Invalid email or password. Please try again.');
      }
    } else {
      // Sign Up
      const { name, mail, password } = formData;

      // Retrieve existing users from local storage or initialize an empty array
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

      // Check if the user already exists by email
      const userExists = existingUsers.some((user) => user.mail === mail);

      if (userExists) {
        setError('User already exists. Please sign in.');
      } else {
        // Add the new user to the local storage
        const newUser = { name, mail, password };
        existingUsers.push(newUser);
        localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

        // Reset the form and show a success message
        setFormData({ name: '', mail: '', password: '' });
        setError('');
        alert('Registration successful. You can now sign in.');
      }
    }
  };

  return (
    <>
      <h2>Sign In/Sign Up</h2>
      <div className={`container ${containerClass}`} id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
            <input type="email" placeholder="Email" name="mail" value={formData.mail} onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="signin-container">
          <div className="card">
            <div className="form-container sign-in-container">
              <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <input
                  type="text"
                  id="username"
                  name="mail"
                  placeholder="Enter your email"
                  value={formData.mail}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <a href="#">Forgot your password?</a>
                <button>Submit</button>
                <Link to="/gender">Proceed</Link>
                {error && <p className="error">{error}</p>}
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us, please sign in with your email and password.</p>
                  <button className="ghost" id="signIn" onClick={handleSignInClick}>
                    <Link to="/">Sign In</Link>
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start the journey with us.</p>
                  <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
