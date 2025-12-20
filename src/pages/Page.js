import React from 'react';
import "../styles/styles.css";

export default function Page() {
  return (
    <div className="page">
      <section id="home">
        <h1>Home</h1>
        <p>Welcome to my personal website!</p>
      </section>

      <section id="contact">
        <h1>Contact</h1>
        <p>Contact information goes here...</p>
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <p>My projects will be displayed here...</p>
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