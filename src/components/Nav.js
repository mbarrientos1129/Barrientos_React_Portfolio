import React from "react";

const styles = {
  heading: {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: 'lightslategrey',
    color: 'white',
  },

  anchor: {
    padding: '14px 20px',
    textAlign: 'center',
    color: 'white'
  }
}

function Nav({ currentPage, handlePageChange}) {
  return (
    <div className="sideNav">
      <nav style={styles.heading}>
        <a style={styles.anchor} 
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav.link'}>
          Contact Me</a>

        <a style={styles.anchor} 
        href='#portfolio'
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav.link'}>
          Portfolio</a>

        <a style={styles.anchor} 
        href="#contact"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link active' : 'nav.link'}>Home</a>
      </nav>
    </div>
  );
}

export default Nav;
