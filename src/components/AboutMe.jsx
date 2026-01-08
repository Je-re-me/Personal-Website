import React from 'react';
import AboutBorder from './AboutBorder';
import FadeInText from '../components/FadeInText';
import "../styles/styles.css";

export default function AboutMe() {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <AboutBorder
            as="button"
            className="custom-class"
            color="cyan"
            speed="5s"
            >
                <div className="flex flex-row items-center gap-10 pl-10 pt-8 pb-8">
                    {/* Profile Picture */}
                    <FadeInText delay={0.3} duration={2} direction="left">
                        <img 
                            src="/ProfilePic.png" 
                            alt="Profile" 
                            className="w-64 h-64 rounded-full object-cover border-4 border-cyan-900 shadow-lg"
                        />
                    </FadeInText>

                    {/* Text Content */}
                    <div className="flex-1 text-left">
                        <div className="flex-1 text-left">
                        <FadeInText delay={0.5} duration={2} direction="right">
                            <h1 className="text-5xl font-extrabold mb-4 pb-3 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent font-['Poppins']">
                                Hi! I'm Jeremy!
                            </h1>
                        </FadeInText>
                        </div>

                        <FadeInText delay={0.7} duration={3} direction="left">
                            <p className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent font-['Quicksand'] text-lg"> 
                                I'm currently a 2nd-year Computer Science student at UBC, and I'm really passionate about the creative and defensive aspects of technology!
                                Why CS? Truthfully, I'm still figuring that out, but I do know that I love building things and solving problems.
                                My main focus currently is full-stack and web development, but I also have interests in fields like cybersecurity and even game design!
                                Off-screen, I apply the same competitiveness and strategic thinking to the badminton court, where I play competitively at a tournament level.
                                If you're curious about my work or just want to chat, feel free to reach out via Instagram!
                            </p>
                        </FadeInText>
                    </div>
                </div>
            </AboutBorder>
        </div>
    );
}   