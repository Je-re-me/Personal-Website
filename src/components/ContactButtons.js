import React from 'react';
import StarBorder from './StarBorder';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import "../styles/styles.css";

export default function ContactButtons() {
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center">
            <StarBorder 
                as="a" 
                href="mailto:jeremy60572@gmail.com"
                className="contact-button"
                color="#7484BE"
                speed="5s"
            >
                <FaEnvelope className="w-7 h-7" />
            </StarBorder>
            
            <StarBorder 
                as="a" 
                href="https://www.linkedin.com/in/jeremylin67"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
                color="#7484BE"
                speed="5s"
            >
                <FaLinkedin className="w-7 h-7" />
            </StarBorder>

            <StarBorder 
                as="a" 
                href="https://github.com/Je-re-me"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
                color="#7484BE"
                speed="5s"
            >
                <FaGithub className="w-7 h-7" />
            </StarBorder>
            
            <StarBorder 
                as="a" 
                href="https://www.instagram.com/je_re_me/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
                color="#7484BE"
                speed="5s"
            >
                <FaInstagram className="w-7 h-7" />
            </StarBorder>
        </div>
    );
}
