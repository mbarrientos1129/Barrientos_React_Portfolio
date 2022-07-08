import React from 'react';
import devResume from '../components/Assets/Resume.pdf';
import Button from 'react-bootstrap/Button';

const styles = {
    heading: {
        margin: 0,
        padding: '75px',
        textAlign: 'center',
        fontSize: '3rem',
        color: 'white',
    },
    paragraph: {
        flex: '70%',
        padding: '20px',
        height: '250px',
        margin: '0',
        textAlign: 'center',
        fontSize: '20px'
    },
    
    
};

function ResumePage() {
    return (

        <div class="contactContainer">

            <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">

                <div className="contentBox" id="resumepage">

                    <h2 style={styles.heading}>Resume</h2>
                    <p style={styles.paragraph}>
                        This is my current resume. Please take a look!
                    </p>
                    <Button style={styles.button} className="portfolioBtn" variant="warning" href={devResume} download={true}>Download</Button>



                </div>

            </div>

        </div>

    );
}

export default ResumePage;