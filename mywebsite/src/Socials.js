import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Socials() {
    return (
        <div className="Socials">
            <ul>
                <li><a target="_blank" rel="noopener noreferrer" href = "https://www.github.com/c73lam8797"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href = "https://www.linkedin.com/in/lam-charmaine/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
            </ul> 
        </div>
    );
};