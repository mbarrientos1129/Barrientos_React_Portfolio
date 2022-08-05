import React from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const styles = {
    icons: {
        display: 'inline-block',
        padding: '20px 50px',
        align: 'center',
        fontSize: '50px',
        textAlign: 'center',
        margin: 0,
        borderRadius: '10px',
        boarder: '3px solid',
        flexFlow: 'row wrap',
    }
};

function Footer() {
    return (

        <div class="footerContainer">

            <footer className="footer contentBox">

                <div className="row">
                    <h3>Contact Info:</h3>
                    <div style={styles.icons} className="col d-flex justify-content-end text-end" id='icons'>
                    <a href="https://www.linkedin.com/in/michael-barrientos-a18089205/"><FontAwesomeIcon icon={faLinkedin} size='lg' /></a>
                    </div>
                    <div style={styles.icons} className="col d-flex justify-content-center text-center">
                    <a href="https://github.com/mbarrientos1129"><FontAwesomeIcon icon={faGithub} size='lg' /></a>
                    </div>
                    <div style={styles.icons} className="col d-flex justify-content-start text-start">
                    <a href="mailto:michael.barrientos1129@gmail.com"><FontAwesomeIcon icon={faEnvelope} size='lg' /></a>
                    </div>
                </div>
                <h2>Made by Michael Barrientos</h2>

            </footer>

        </div>
    )
}

export default Footer;