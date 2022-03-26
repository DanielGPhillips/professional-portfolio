import React from 'react'; 
import Card from '@mui/material/Card';

 
function Thumbnail(props) {
  return (
    <Card bg="dark" text="white" style={{ width: '20rem' }} className="project">
      <Card.Body>
        <Card.Img variant="top" src={props.image} alt="Project Thumbnail" style={{height:"50%" }}/>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.tech}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link href={props.gLink}>See GitHub Repo</Card.Link>
        <Card.Link href={props.dLink}>See Deployed Site</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Thumbnail;