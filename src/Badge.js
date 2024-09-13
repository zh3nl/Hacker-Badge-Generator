import React from 'react';
import {QRCodeSVG} from 'qrcode.react';
import { Link } from 'react-router-dom';

function Badge({ participant }) {
    const { id, name, university, major, graduationDate, skills, github } = participant;
    const profileLink = `/profile/${id}`;

    return (
        <div className="badge-container" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', width: '300px', textAlign: 'center' }}>
            <h2>{name}</h2>
            <p><strong>University:</strong> {university}</p>
            <p><strong>Major:</strong> {major}</p>
            <p><strong>Graduation Date:</strong> {graduationDate}</p>
            <p><strong>Skills:</strong> {skills}</p>
            <p><strong>GitHub:</strong> <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">{github}</a></p>

            {/* QR Code that links to the unique profile page */}
            <QRCodeSVG value={window.location.origin + profileLink} size={128} />

            <p>Scan this QR code to view {name}'s profile!</p>

            {/* Optional: A link to the profile page */}
            <Link to={profileLink} className="btn btn-primary">View Profile</Link>
        </div>
    );
}

export default Badge;
