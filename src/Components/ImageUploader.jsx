import React, { useState } from 'react';
import Webcam from 'react-webcam';
import firebase from './firebase';
import 'firebase/storage';

const ImageUploader = () => {
  const webcamRef = React.useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);

    // Upload the image to Firebase Storage
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`https://console.firebase.google.com/u/0/project/gallery-fit-ai/database/gallery-fit-ai-default-rtdb/data/~2F/${Date.now()}.png`);
    const uploadTask = imageRef.putString(imageSrc, 'https://console.firebase.google.com/u/0/project/gallery-fit-ai/database/gallery-fit-ai-default-rtdb/data/~2F');

    uploadTask.on(
      'state_changed',
      null,
      (error) => {
        console.error('Error uploading image:', error);
      },
      () => {
        // Image uploaded successfully
        console.log('Image uploaded successfully');
      }
    );
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/png"
        width={640}
        height={480}
      />
      <button onClick={captureImage}>Capture Image</button>
      {imageSrc && <img src={imageSrc} alt="Captured" />}
    </div>
  );
};

export default ImageUploader;
