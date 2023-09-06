import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const CapturePhoto = ({ capturedPhoto, firebaseRefUrl }) => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const captureImage = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);

    try {
      // Upload the image to Firebase Storage
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(`images/${Date.now()}.png`);
      const uploadTask = imageRef.putString(imageSrc, 'data_url');

      const snapshot = await uploadTask;

      // Get the download URL of the uploaded image
      const downloadURL = await snapshot.ref.getDownloadURL();

      // Store the image URL in the Firebase Realtime Database using the provided reference URL
      const databaseRef = firebase.database().ref(firebaseRefUrl);
      databaseRef.push({ imageURL: downloadURL });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
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

export default CapturePhoto;
