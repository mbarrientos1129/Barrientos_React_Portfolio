import Project from "./Project";
const styles = {
    heading: {
    margin: 0,
    padding: '75px',
    textAlign: 'center',
    fontSize: '3rem',
    color: 'black',
    },
};

function Portfolio() {
    const ProjectsArray = [
        {
            link: 'https://infinite-caverns-73704.herokuapp.com/',
            title: 'Cumulus Chat',
            image: './Assets/Cumulus-Chat.png'
        },
        {
            link: 'https://github.com/mbarrientos1129/E-Commerce-ORM_HW',
            title: 'Ecommerce Back-End',
            image: './Assets/Ecommerce.png'
        },
        {
            link: 'https://mbarrientos1129.github.io/mighty-mustangs-Project-1-Group/',
            title: 'filmBites!',
            image: './Assets/filmBites.PNG'
        },
    ]
    return (
      <div className="App">
          <h2 style={styles.heading}>Web Applications</h2>
          {ProjectsArray.map(project => {
              return <Project link={project.link} title={project.title} image={project.image}/>
          })}
      </div>
    );
  }
  
  export default Portfolio;
  