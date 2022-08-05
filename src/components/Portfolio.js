import React from "react";
import Project from "./Project";
import cumulusChat from "./Assets/Cumulus-Chat.png";
import eCommerce from "./Assets/Ecommerce.png";
import filmBites from "./Assets/filmBites.PNG";
import Accord from "./Assets/Accord.PNG";
import bookSearch from "./Assets/bookSearch.PNG";
import employeeTracker from "./Assets/employeeTracker.PNG";
import socialNetworkAPI from "./Assets/socialNetworkAPI.PNG";

function Portfolio() {
    const ProjectsArray = [
        {
            link: 'https://infinite-caverns-73704.herokuapp.com/',
            title: 'Cumulus Chat',
            image: cumulusChat,
        },
        {
            link: 'https://github.com/mbarrientos1129/E-Commerce-ORM_HW',
            title: 'Ecommerce Back-End',
            image: eCommerce,
        },
        {
            link: 'https://mbarrientos1129.github.io/mighty-mustangs-Project-1-Group/',
            title: 'filmBites!',
            image: filmBites,
        },
        {
            link: 'https://enigmatic-reef-68574.herokuapp.com/',
            title: 'Accord',
            image: Accord,
        },
        {
            link: 'https://protected-ocean-60585.herokuapp.com/',
            title: 'Book Search Engine',
            image: bookSearch,
        },
        {
            link: 'https://github.com/mbarrientos1129/Employee_Tracker_App',
            title: 'Employee Tracker',
            image: employeeTracker,
        },
        {
            link: 'https://github.com/mbarrientos1129/Social_Network_API',
            title: 'Social Network API',
            image: socialNetworkAPI,
        },
    ]
    return (
        <div class='webConatiner'>
            <div className="App">
                <h2 className="portfolioHeading">Web Applications</h2>
                <div className="portfolioMeat">
                    <p>
                        Welcome to my Web Applications Section!
                    </p>
                    <p>
                        Below are snippets of my web applications I have made, refactored, as well as worked collaboratively with other peers.
                        These cards are interactive, they contain the link to these projects GitHub repository or their deployed links.
                        As well on the footer there is a link to my GitHub profile, and I encourage you to peruse my repositories.
                    </p>
                    <p>
                        There are three applications that have deployed links. Those application consist of Cumulus Chat, filmBites!, and Accord.
                    </p>
                    <p>
                         <b>Application Uses for Overview - ></b>
                    </p>
                    <div className="webInstruction">
                        <p>
                            <b>Cumulus Chat:</b> Please pair with a cohort as this is how you will test if this application works.
                            Upon page opening, you can use a test email for authentication and start chatting!
                            Biggest challenge with this application was getting Socket.io to work properly.
                            But after constant testing, we got it to work.
                        </p>
                        <p>
                            <b>Accord:</b> This is a simple blog posting application.
                        </p>
                        <p>
                            <b>filmBites!:</b> This application is used for a night in, if you really can’t decide what you want to each or watch.
                            You can use this application to figure that out quickly. This application uses 2 API’s, themealDB and omDB.
                            They were both great to work with, but we had limitations given by the API, but we got it to work and want to continue
                            further development.
                        </p>
                    </div>
                </div>
                <div className="portfolioCard">
                    {ProjectsArray.map(project => {
                        return <Project link={project.link} title={project.title} image={project.image} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;

