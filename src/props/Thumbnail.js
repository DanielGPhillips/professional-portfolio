import React from 'react'; // Import the Component component from React
import '../App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
      <a href={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project Thumbnail"/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-tech">{props.tech}</div>
      </a>
    </div>
  );
}

export default Thumbnail;