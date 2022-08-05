import React from 'react';
import devResume from '../components/Assets/Resume.pdf';
import Button from 'react-bootstrap/Button';

function ResumePage() {
    return (

        <div class="contactContainer">

            <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">

                <div className="contentBox" id="resumepage">

                    <h2 className='contactHeading'>Resume</h2>
                    <p className='contactText'>
                        This is my current resume. Please take a look!
                    </p>
                    <Button className="portfolioBtn" variant="warning" href={devResume} download={true}>Download</Button>



                </div>

            </div>

        </div>

    );
}

export default ResumePage;