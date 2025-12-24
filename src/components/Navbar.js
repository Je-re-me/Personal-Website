import React, { useState } from 'react';
import "../styles/styles.css";

export default function Navbar() {
  return <nav className="navbar"> 
    <a href="#home" className="home-page">
      <img src="/Logo.png" alt="Home Icon" className="logo hover:animate-float hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.8)]" ></img>
    </a>
    <ul>
      <li className="hover:border-white-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.6)] transition-all duration-300">
        <a href="#contact">Contact</a>
      </li>
      <li className="hover:border-white-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.6)] transition-all duration-300">
        <a href="#projects">Projects</a>
      </li>
      <li className="hover:border-white-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.6)] transition-all duration-300">
        <a href="#about">About</a>
      </li>
      <li className="hover:border-white-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.6)] transition-all duration-300">
        <a href="#resume">Resume</a>
      </li>
    </ul>
  
  
  </nav>
}