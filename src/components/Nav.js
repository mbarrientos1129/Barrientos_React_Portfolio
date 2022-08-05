import React from "react";
import '../App.css';

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="navContainer">
      <nav className="navBar">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav.link'}>
          Contact Me</a>

        <a
          href='#portfolio'
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav.link'}>
          Portfolio</a>

        <a
          href="#contact"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav.link'}>Home</a>
      </nav>
    </div>
  );
}
