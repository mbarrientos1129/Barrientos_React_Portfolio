import Project from "./Project";
function Portfolio() {
    const ProjectsArray = [
        {
            link: 'https://infinite-caverns-73704.herokuapp.com/',
            title: 'Cumulus Chat',
            image: 'Assets/Cumulus-Chat.png'
        },
        {
            link: 'https://www.google.com',
            title: 'test2',
            image: 'https://longwoodgardens.org/sites/default/files/highlight_images/76758.jpg'
        },

    ]
    return (
      <div className="App">
          {ProjectsArray.map(project => {
              return <Project link={project.link} title={project.title} image={project.image}/>
          })}
      </div>
    );
  }
  
  export default Portfolio;
  