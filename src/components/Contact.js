import React from 'react';
import devResume from '../components/Assets/Resume.pdf';
import Button from 'react-bootstrap/Button';

function ResumePage() {
    return (

        <div class="contactContainer">

            <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">

                <div className="contentBox" id="resumepage">

                    <h2 className='contactHeading'>Resume</h2>
                    <div className='contactText'>
                        <p>
                            Below there is a downloadable version of resume. Please feel free to download this and look it over!
                            Thank you for looking at my portfolio.
                        </p>
                        <p>
                            Feel free to reach out to me with any questions in the links at the footer of the page.
                            Links below consist of GitHub, LinkedIn, as well as my E-Mail.
                        </p>
                        <p>
                            <b>A Few Qualifications: </b>
                        </p>
                        <p>
                            Working knowledge of HTML5, CSS3, JavaScript, jQuery, Bootstrap, Firebase, Node.js, Express.js, MySQL,
                            MongoDB, Handlebars, as well as React.
                        </p>
                        <p>
                            <b>Experience with:</b>
                        </p>
                        <p>
                            <li>Third Party API’s</li>
                            <li>Building API’s</li>
                            <li>ORM Process</li>
                            <li>MVC Architecture</li>
                            <li>Base knowledge of OOP</li>
                            <li>Test Driven Development</li>
                            <li>Progressive Web Apps</li>
                        </p>
                    </div>
                    <div className='buttonContainer'>
                        <Button className="portfolioBtn" variant="warning" href={devResume} download={true}>Download</Button>
                    </div>

                </div>

            </div>

        </div>

    );
}

export default ResumePage;