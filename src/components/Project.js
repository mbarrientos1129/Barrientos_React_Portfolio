import '../App.css'
function Project(props) {
    return (
      <div className="Project">
          <a href={props.link}>
              <h1>{props.title}</h1>
              <img alt= "test" src={props.image}></img>
          </a>
      </div>
    );
  }
  
  export default Project;
  