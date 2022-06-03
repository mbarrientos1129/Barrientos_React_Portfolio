import React from "react";
import Project from "./Project";
import cumulusChat from "./Assets/Cumulus-Chat.png";
import eCommerce from "./Assets/Ecommerce.png";
import filmBites from "./Assets/filmBites.PNG";
import Accord from "./Assets/Accord.PNG";
import bookSearch from "./Assets/bookSearch.PNG";
import employeeTracker from "./Assets/employeeTracker.PNG";
import socialNetworkAPI from "./Assets/socialNetworkAPI.PNG";


const styles = {
    heading: {
        margin: 0,
        padding: '75px',
        textAlign: 'center',
        fontSize: '3rem',
        color: 'black',
    },
    image: {
        width: '150px',
        align: 'right',
    },
    paragraph: {
        flex: '70%',
        padding: '20px',
        height: '250px',
        margin: '0',
        textAlign: 'center',
        fontSize: '20px'
      }
};

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
                <h2 style={styles.heading}>Web Applications</h2>
                <p style={styles.paragraph}>These applications listed below are a culmination of work I have completed. Ranging from 
                    full application with other students, refactored applications into a MERN stack. As well
                    as back end application where i feel most comfortable.
                </p>
                {ProjectsArray.map(project => {
                    return <Project style={styles.image} link={project.link} title={project.title} image={project.image} />
                })}
            </div>
        </div>
    );
}

export default Portfolio;

