import React, { useState } from 'react';
import StarBorder from './StarBorder'
import "../styles/styles.css";

export default function Navbar() {
  return <nav className="navbar"> 
    <a href="#home" className="home-page">
      <img src="/Logo.png" alt="Home Icon" className="logo hover:animate-float hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.8)]" ></img>
    </a>
    
    <ul>
      <li>
        <StarBorder
          as="a"
          href="#contact"
          color="#7484BE"
          speed="5s"
          className="block"
        >
          Contact
        </StarBorder>
      </li>
      <li>
        <StarBorder
          as="a"
          href="#projects"
          color="#7484BE"
          speed="5s"
          className="block"
        >
          Projects
        </StarBorder>
      </li>
      <li>
        <StarBorder
          as="a"
          href="#about"
          color="#7484BE"
          speed="5s"
          className="block"
        >
          About
        </StarBorder>
      </li>
      <li>
        <StarBorder
          as="a"
          href="#resume"
          color="#7484BE"
          speed="5s"
          className="block"
        >
          Resume
        </StarBorder>
      </li>
    </ul>
    
  </nav>
}