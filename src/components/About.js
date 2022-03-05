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
                <Col>
                    <h2 className='text-center text-white'>About Me</h2>
                    <p className='text-center text-white'>This is a short bio that I have to figure out how to write about myself so that employers can get to know me a little bit.  Longest run on sentence ever just before this.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;