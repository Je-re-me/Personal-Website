import React from 'react';
import AboutBorder from './AboutBorder';
import ScrollReveal from './ScrollReveal.jsx';  
import "../styles/styles.css";

export default function AboutMe() {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <AboutBorder 
                as="a" 
                className="about-me-content"
                color="#7484BE"
                speed="5s"
            >
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    >
                    I’m currently pursuing a Bachelor of Science in Computer Science at the University of British Columbia, with an expected graduation date of May 2028. 
                    I’m an aspiring developer passionate about breaking into the tech industry, with a strong interest in cybersecurity and AI development. 
                    I love playing badminton in my spare time, and I’d be happy to connect with others who share similar interests or are passionate about tech and innovation.

                    You can see all of my projects on GitHub: https://github.com/Je-re-me

                    If you have any questions, please reach out to my email: Jeremy60572@gmail.com
                </ScrollReveal>
            </AboutBorder>
        </div>
    );
}   