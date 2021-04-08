import React from 'react';
import about from '../img/laptop.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">

                <span> Sou Raufo Junior desenvolvedor de sites! </span>
                <p className="about-text">

                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Raufo Rastrero Junior</p>
                        <p>: 38</p>
                        <p>: Brasileiro</p>
                        <p>: Português, English</p>
                        <p>: Itapevi/SP</p>
                        <p>: Brasil</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
