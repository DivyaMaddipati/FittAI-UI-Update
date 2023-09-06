import React, { useState } from 'react';
import './Gender.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Gender = () => {
  const [selectedGender, setSelectedGender] = useState(''); // State to store the selected gender

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  const handleContinue = () => {
    if (selectedGender) {
      // Do something with the selected gender, e.g., send it to the server
      console.log(`Selected Gender: ${selectedGender}`);

      // Proceed to the next task or page
      // You can use window.location.href or React Router for navigation
      // Example using window.location.href:
      // window.location.href = '/next-page';
    } else {
      alert('Please select a gender before continuing.');
    }
  };

  return (
    <div className="gender-container">
      <div className="card">
        <h2>Choose Your Gender</h2>
        <div className="gender-options">
          <div
            className={`gender-card ${selectedGender === 'Male' ? 'selected' : ''}`}
            onClick={() => handleGenderClick('Male')}
          >
            <h3>Male</h3>
            <img src="https://th.bing.com/th/id/OIP.D-GqhhBL6pO5VOptbR3F-gHaK9?w=132&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="male"/>
                <p>Select this option if you identify as Male.</p>
          </div>
          <div
            className={`gender-card ${selectedGender === 'Female' ? 'selected' : ''}`}
            onClick={() => handleGenderClick('Female')}
          >
            <h3>Female</h3>
            <img src="https://th.bing.com/th/id/OIP.Fi7eHlWB81hKDDiHsavhfgHaGv?w=168&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="female" />
            <p>Select this option if you identify as Female.</p>
          </div>
        </div>
        <Link to="/fit" className="btn btn-primary" onClick={handleContinue}>
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Gender;
