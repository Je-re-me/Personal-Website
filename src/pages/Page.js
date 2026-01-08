import React, { useEffect } from 'react';
import "../styles/styles.css";
import CircularText from '../components/CircularText.jsx';
import ScrollFloat from '../components/ScrollFloat.jsx'
import ScrollFloatUp from '../components/ScrollFloatUp.jsx'
import ContactButtons from '../components/ContactButtons.js';
import TextType from '../components/TextType.jsx';
import AboutMe from '../components/AboutMe.jsx';

export default function Page() {
  return (
    <div className="page">
      <section id="home" className="flex items-center justify-center">
        <div className="relative inline-block">
          <CircularText
            text="2ND YEAR CS @ UBC * ASPIRING DEVELOPER * FULLSTACK * CYBERSECURITY * "
            onHover="speedUp"
            spinDuration={25}
            className="circular-text text-weight-700"
          />
          <div className="absolute top-1/2 left-1/2 pointer-events-none" style={{ transform: 'translate(-50%, -40%)' }}>
            <ScrollFloatUp
              animationDuration={1.5}
              ease='back.inOut(1.5)'
              stagger={0.03}
              containerClassName="text-center"
              containerStyle={{ margin: 0 }}
              textClassName="text-white"
              style={{ fontSize: '6rem', letterSpacing: '0.05rem', fontWeight: 500, lineHeight: 0.9, whiteSpace: 'nowrap'}}
            >
              JEREMY
            </ScrollFloatUp>
            <div style={{ width: '100%', height: '2px', backgroundColor: 'white', margin: '0.6rem 0' }}></div>
            <ScrollFloat
              animationDuration={2}
              ease='back.inOut(1.5)'
              stagger={0.03}
              containerClassName="text-center"
              containerStyle={{ margin: 0 }}
              textClassName="text-white"
              style={{ fontSize: '6rem', letterSpacing: '0.05rem', fontWeight: 500, lineHeight: 0.9 }}
            >
              LIN
            </ScrollFloat>
          </div>
        </div>
      </section>

      <section id="contact">
        <ContactButtons />
        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', fontSize: '3.5rem'}}>
          <TextType 
          text={["Let’s connect!", "Reach out anytime!", "Thanks for visiting!"]}
          typingSpeed={100}
          pauseDuration={2500}
          showCursor={true}
          cursorCharacter="|"
          className="font-['Poppins'] font-weight-300"
        />
        </div>
      </section>

      <section id="projects">
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="resume">
      </section>
    </div>
  );
}