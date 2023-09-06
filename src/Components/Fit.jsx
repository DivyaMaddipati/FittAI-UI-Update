import React, { useState } from 'react';
import './Fit.css';
import tight from './images/tight.jpg';
import right from './images/right.jpg';
import loose from './images/loose.jpg';
import { Link } from 'react-router-dom';

const Fit = () => {
  const [selectedImage, setSelectedImage] = useState(''); // State to store the selected image

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleContinue = () => {
    if (selectedImage) {
      // Do something with the selected image, e.g., display a message
      console.log(`Selected Image: ${selectedImage}`);

      // Proceed to the next task or page
      // You can use window.location.href or React Router for navigation
      // Example using window.location.href:
      // window.location.href = '/next-page';
    } else {
      alert('Please select an image before continuing.');
    }
  };

  return (
    <div className="wardrobe-container">
      <div className="card">
        <h2>What Are You Wearing</h2>
        {/* <p>Select an outfit from your wardrobe.</p> */}
        <div className="wardrobe-options">
          <div
            className={`wardrobe-card ${selectedImage === 'image1' ? 'selected' : ''}`}
            onClick={() => handleImageClick('image1')}
          >
            <img src={right} alt="Outfit 1" />
          </div>
          <div
            className={`wardrobe-card ${selectedImage === 'image2' ? 'selected' : ''}`}
            onClick={() => handleImageClick('image2')}
          >
            <img src={tight} alt="Outfit 2" />
          </div>
          <div
            className={`wardrobe-card ${selectedImage === 'image3' ? 'selected' : ''}`}
            onClick={() => handleImageClick('image3')}
          >
            <img src={loose} alt="Outfit 3" />
          </div>
        </div><br></br>
        <Link to="/entry" className="btn btn-primary" onClick={handleContinue}>
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Fit;
