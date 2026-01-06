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
                    baseOpacity={50}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    >
                    kill yourself
                </ScrollReveal>
            </AboutBorder>
        </div>
    );
}   