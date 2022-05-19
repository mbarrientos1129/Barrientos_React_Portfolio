import React from 'react';

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
                    <a href="https://docs.google.com/document/d/1HYmKDNpf1VzUYdHUIuVRQQktXBKI10d-/edit" target="_blank" rel="noopener noreferrer"><button style={styles.button} className="portfolioBtn">Download</button></a>



                </div>

            </div>

        </div>

    );
}

export default ResumePage;