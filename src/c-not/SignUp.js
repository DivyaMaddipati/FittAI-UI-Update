import React, { useState } from 'react';
import "./Signup.css";
const SignInSignUp = () => {
  const [isSignInActive, setIsSignInActive] = useState(true);

  const handleSignUpClick = () => {
    setIsSignInActive(false);
  };

  const handleSignInClick = () => {
    setIsSignInActive(true);
  };

  const containerClass = isSignInActive ? '' : 'right-panel-active';

  return (
    <div>
      <h2>Sign In/Sign Up</h2>
      <div className={`container ${containerClass}`} id="container">
        <div className="form-container sign-up-container">
          {/* ... Rest of the code ... */}
          <form action="/signup" method="GET">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="mail" />
            <input type="password" placeholder="Password" name="password" />
            <button>
              <a href="index.ejs">Sign Up</a>
            </button>
        </form>
        </div>
        <div className="form-container sign-in-container">
          {/* ... Rest of the code ... */}
          <form action="/sign-in" method="GET">
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" name="mail" />
            <input type="password" placeholder="Password" name="password" />
            <a href="#">Forgot your password?</a>
            <button>
              <a href="index.ejs">Sign In</a>
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
               <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;



// import React, { useState, useEffect } from 'react';
// import "./Signup.css";
// const SignInSignUp = () => {
//   const [isSignUpActive, setIsSignUpActive] = useState(false);

//   const handleSignUpClick = () => {
//     setIsSignUpActive(true);
//   };

//   const handleSignInClick = () => {
//     setIsSignUpActive(false);
//   };

//   useEffect(() => {
//     const signUpButton = document.getElementById("signUp");
//     const signInButton = document.getElementById("signIn");

//     signUpButton.addEventListener("click", handleSignUpClick);
//     signInButton.addEventListener("click", handleSignInClick);

//     // Cleanup event listeners when the component unmounts
//     return () => {
//       signUpButton.removeEventListener("click", handleSignUpClick);
//       signInButton.removeEventListener("click", handleSignInClick);
//     };
//   }, []);

//   return (
//     // ... rest of the component
//     <div>
//       <h2>Sign In/Sign Up</h2>
//       <div className="container" id="container">
//         <div className="form-container sign-up-container">
//           <form action="/signup" method="GET">
//             <h1>Create Account</h1>
//             <input type="text" placeholder="Name" name="name" />
//             <input type="email" placeholder="Email" name="mail" />
//             <input type="password" placeholder="Password" name="password" />
//             <button>
//               <a href="index.ejs">Sign Up</a>
//             </button>
//           </form>
//         </div>
//         <div className="form-container sign-in-container">
//           <form action="/sign-in" method="GET">
//             <h1>Sign in</h1>
//             <input type="email" placeholder="Email" name="mail" />
//             <input type="password" placeholder="Password" name="password" />
//             <a href="#">Forgot your password?</a>
//             <button>
//               <a href="index.ejs">Sign In</a>
//             </button>
//           </form>
//         </div>
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h1>Welcome Back!</h1>
//               <p>To keep connected with us please login with your personal info</p>
//               <button className="ghost" id="signIn">
//                 Sign In
//               </button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start the journey with us</p>
//               <button className="ghost" id="signUp">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// };

// export default SignInSignUp;
