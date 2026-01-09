import React from 'react';
import StarBorder from './StarBorder'
import "../styles/styles.css";

export default function Navbar() {
  const handleResumeClick = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Resume_Jeremy_L.pdf`;
    link.download = 'Resume_Jeremy_L.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <nav className="navbar"> 
    <a href="#home" className="home-page">
      <img src="/Logo.png" alt="Home Icon" className="logo hover:animate-float hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.8)]" ></img>
    </a>
    
    <ul>
      <li>
        <StarBorder
          as="a"
          href="#home"
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
          href="#"
          onClick={handleResumeClick}
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