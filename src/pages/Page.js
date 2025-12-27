import React from 'react';
import "../styles/styles.css";
import CircularText from '../components/CircularText.jsx';
import ScrollFloat from '../components/ScrollFloat.jsx'

export default function Page() {
  return (
    <div className="page">
      <section id="home" className="flex items-center justify-center">
        <div className="relative inline-block">
          <CircularText
            text="2ND YEAR COMP SCI * ASPIRING DEVELOPER * FULLSTACK * CYBERSECURITY * "
            onHover="slowDown"
            spinDuration={25}
            className="circular-text"
          />
          <div className="absolute top-1/2 left-1/2 pointer-events-none" style={{ transform: 'translate(-50%, -40%)' }}>
            <h1 className="text-white text-center" style={{ fontSize: '6rem', letterSpacing: '0.05rem', fontWeight: 400, lineHeight: 0.9, margin: 0 }}>
              JEREMY
            </h1>
            <div style={{ width: '100%', height: '2px', backgroundColor: 'white', margin: '0.5rem 0' }}></div>
            <ScrollFloat
              animationDuration={1.7}
              ease='back.inOut(1.5)'
              stagger={0.05}
              containerClassName="text-center"
              containerStyle={{ margin: 0 }}
              textClassName="text-white"
              style={{ fontSize: '6rem', letterSpacing: '0.05rem', fontWeight: 400, lineHeight: 0.9 }}
            >
              LIN
            </ScrollFloat>
          </div>
        </div>
      </section>

      <section id="contact">
        <h1>Contact</h1>
        <p>Contact information goes here...</p>
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <p>My projects will be displayed here...</p>
        <img src="/Birdie.png" alt="Birdie Icon" className="picture"></img>
      </section>

      <section id="about">
        <h1>About</h1>
        <p>Information about me goes here...</p>
      </section>

      <section id="resume">
        <h1>Resume</h1>
        <p>My resume details go here...</p>
      </section>
    </div>
  );
}