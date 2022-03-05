import React from 'react';
import '../App.css'
import Portrait from '../recent-me.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
    return(
        <Container bg="dark" text="white" fluid>
            <Row bg="dark" text="white">
                <Col> 
                    <Image src={Portrait} alt="Portrait" fluid></Image>
                </Col>
                <Col className="text-center">
                    <h2 className='text-white'>About Me</h2>
                    <p className='fs-3 text-center text-white'>
                        Hey there! I am Daniel (Danny) Phillips and I am a web developer based in Washington.
                    </p>
                    <br></br>
                    <p className='text-center text-white'>
                        I am an 11-year United States Navy veteran.  I worked in the nuclear power field for all 11 years, I chose to leave the Navy in 2020.  After some soul searching I chose to pursue a career in programming and web development. 
                        I enrolled in the University of Washington's Full Stack Web Developer Bootcamp and I've been having a blast learning and coding since!  In my free time I love to work on many various forms of art and have been getting really
                        into digital, so I love adding some custom graphic design elements into my work. 
                        <br></br>
                        <br></br>
                        When I am not home working on coding or art, I love being in the mountains and forests.  Camping, backpacking, and hiking are some of my favorite activities.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;