//Use favicons fot Githhub, Linked In, aned any other third party social media platform
//These all ,ust have working links to those sites using Href as normal.
//Refer back to old portfolio for HTML lay out

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const styles = {
    heading: {
      margin: 0,
      padding: '75px',
      textAlign: 'center',
      fontSize: '3rem',
    },
};

function Footer() {
    return (

        <div class="container">
 
            <footer className="footer contentBox">

                <div className="row">  
                <h3 style={styles.heading}>Contact Info:</h3>
                    <div className="col d-flex justify-content-end text-end">
                        <a href="https://www.linkedin.com/in/michael-barrientos-a18089205/"><FontAwesomeIcon icon={faLinkedin} size='lg'/></a> 
                    </div>
                    <div className="col d-flex justify-content-center text-center">
                        <a href="https://github.com/mbarrientos1129"><FontAwesomeIcon icon={faGithub} size='lg'/></a> 
                    </div>
                    <div className="col d-flex justify-content-start text-start">
                        <a href="mailto:michael.barrientos1129@gmail.com"><FontAwesomeIcon icon={faEnvelope} size='lg'/></a>       
                    </div>
                </div>           
                <h2>Made by Michael Barrientos</h2>
     
            </footer> 
        
        </div>
    )
}

export default Footer;