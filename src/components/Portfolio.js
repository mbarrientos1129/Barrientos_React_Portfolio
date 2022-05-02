import Project from "./Project";
import cumulusChat from "./Assets/Cumulus-Chat.png"
import eCommerce from "./Assets/Ecommerce.png"
import filmBites from "./Assets/filmBites.PNG"
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
    ]
    return (
      <div className="App">
          <h2 style={styles.heading}>Web Applications</h2>
          {ProjectsArray.map(project => {
              return <Project style={styles.image} link={project.link} title={project.title} image={project.image}/>
          })}
      </div>
    );
  }
  
  export default Portfolio;
  
  