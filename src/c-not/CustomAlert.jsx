import React from 'react';
import './CustomAlert.css';

const CustomAlert = ({ message, buttonText, onButtonClick }) => {
  return (
    <div className="custom-alert-container">
      <div className="custom-alert">
        <p>{message}</p>
        <button onClick={onButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default CustomAlert;
