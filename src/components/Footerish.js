import React from "react";
import { Navbar, Nav, Row, Col, Container } from "react-bootstrap";
import {BsGithub, BsLinkedin} from "react-icons/bs"

const footer = {
    position: 'absolute',
    left:0,
    bottom:0,
    right:0,
};

function Footerish() {
    return (
        <Container style={footer}>
            <footer>
                <Container>
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Nav className="mx-auto">                    
                            <Row>
                                <Col>
                                    <Nav.Link className="my-auto" href="https://github.com/DanielGPhillips"><BsGithub color="white" size="4rem"/></Nav.Link>
                                </Col>
                                <Col>
                                    <Nav.Link className="my-auto" href="https://linkedin.com/daniel-phillips-6b01381b0"><BsLinkedin color="white" size="4rem"/></Nav.Link>
                                </Col>
                            </Row>                   
                        </Nav>
                    </Navbar>
                </Container>
            </footer>
        </Container>       
    )
}

export default Footerish;