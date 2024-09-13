import React from 'react';
import { useParams } from 'react-router-dom';

// Dummy data for demonstration
const participants = [
    {
        id: 1,
        name: '',
        university: '',
        major: '',
        graduationDate: '',
        skills: '', 
        github: ''
    },
];

function Profile() {
    const { id } = useParams();
    const participant = participants.find(p => p.id === parseInt(id));

    if (!participant) {
        return <p>Profile not found</p>;
    }

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', width: '300px', textAlign: 'center' }}>
            <h2>{participant.name}</h2>
            <p><strong>University:</strong> {participant.university}</p>
            <p><strong>Major:</strong> {participant.major}</p>
            <p><strong>Graduation Date:</strong> {participant.graduationDate}</p>
            <p><strong>Skills:</strong> {participant.skills}</p>
            <p><strong>GitHub:</strong> <a href={`https://github.com/${participant.github}`} target="_blank" rel="noopener noreferrer">{participant.github}</a></p>
        </div>
    );
}

export default Profile;
