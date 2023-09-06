import React from 'react';
import { Link } from 'react-router-dom';

function Entry() {
    return (
        <div className="card">
            <label htmlFor="height">Enter Your Height:</label>
            <input type="text" id="height" placeholder="e.g. 175 cm" />
            <br />
            <label htmlFor="weight">Enter Your Weight:</label>
            <input type="text" id="weight" placeholder="e.g. 70 kg" />
            <br /><br></br>
            <Link to='/webcam' className="btn btn-primary" id="continueButton">Continue</Link>
        </div>
    );
}

export default Entry;
