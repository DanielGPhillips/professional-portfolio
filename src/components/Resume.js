import React from 'react';
import { Container, CardGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { IoLogoJavascript } from "react-icons/io"
import { IoDesktopSharp } from "react-icons/io5";
import { GrReactjs, GrNode } from "react-icons/gr";
import { SiMysql, SiSequelize, SiBootstrap, SiExpress, SiApollographql, SiGraphql} from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import '../App.css'

function Resume() {
    return (
        <Container>
            <h1 className='text-center text-white'>Skills</h1>
            <Container className="text-center" fluid>
                <IoDesktopSharp color="white" size='5rem' />
            </Container>
            <Container>
                <CardGroup>
                    <Card bg="dark" text="white" border="none" className='text-center'>
                        <Card.Body className="justify-center-content">
                            <GrReactjs color="white" size="2rem" />
                            <Card.Title>React</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" border="none" className='text-center'>
                        <Card.Body className="justify-center-content">
                            <GrNode color="white" size="2rem" />
                            <Card.Title>Node</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" border="none" className='text-center'>
                        <Card.Body className="justify-center-content">
                            <IoLogoJavascript color="white" size="2rem" />
                            <Card.Title>JavaScript</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card bg="dark" text="white" border="none" className='text-center'>
                        <Card.Body className="justify-center-content">
                            <SiBootstrap color="white" size="2rem" />
                            <Card.Title>Bootstrap</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" border="none" className='text-center'> 
                        <Card.Body className="justify-center-content">
                            <SiMysql color="white" size="2rem" />
                            <Card.Title>MySQL</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" border="none" className='text-center'>
                        <Card.Body className="justify-center-content">
                            <SiSequelize color="white" size="2rem" />
                            <Card.Title>Sequelize</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card bg="dark" text="white" border="none" className='text-center'>
                        <Card.Body className="justify-center-content">
                            <SiExpress color="white" size="2rem" />
                            <Card.Title>Express</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" border="none" className='text-center'>
                        <Card.Body className="justify-center-content">
                            <SiApollographql color="white" size="2rem" />
                            <Card.Title>Apollo</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" border="none" className='text-center'>
                        <Card.Body className="justify-center-content">
                            <SiGraphql color="white" size="2rem" />
                            <Card.Title>GraphQL</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            <Container className='text-center'>
                <h1 className='text-white'>Resume</h1>
                <p className="text-white"> Feel free to download my resume to see my work and education history in the link below:</p>
                <Link to="/files/DanielPhillipsResume.pdf" target="_blank" download><FiDownload color="white" size="5rem" /></Link>
            </Container>
        </Container>
    )
};

export default Resume;