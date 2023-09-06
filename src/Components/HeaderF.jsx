// Header.js
import React from 'react';
import './HeaderF.css'; // Create this CSS file for custom styles

function HeaderF() {
  return (
    <div className="header">
      <div className="container1">
        <div className="row align-items-center">
          <div className="col-6">
            <button className="btn btn-primary">Button</button>
          </div>
          <div className="col-6 text-right">
            <div className="search-bar">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <span className="voice-assistant">
                <i className="fas fa-microphone"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderF;
