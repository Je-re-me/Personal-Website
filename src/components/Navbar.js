import React, { useState } from 'react';
import "../styles/styles.css";

export default function Navbar() {
  return <nav className="navbar"> 
    <a href="#home" className="home-page">
      <img src="/Logo.png" alt="Home Icon" className="logo"></img>
    </a>
    <ul>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
    </ul>
  
  
  </nav>
}