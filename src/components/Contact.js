//Create a form and form handler for user input to send me notifications. 
//Log an error when they have not fully filled out or incorrectly filled out criteria incorrectly with a RegEx

import React from 'react';

function ResumePage() {
    return (

        <div class="container">

            <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">

                <div className="contentBox" id="resumepage">

                    <h2>Resume</h2>
                    <p>
                        Here is my current resume. Thank you.
                    </p>
                    <a href="https://docs.google.com/document/d/1HYmKDNpf1VzUYdHUIuVRQQktXBKI10d-/edit" target="_blank" rel="noopener noreferrer"><button className="portfolioBtn downloadBtn">Download</button></a>



                </div>

            </div>

        </div>

    );
}

export default ResumePage;