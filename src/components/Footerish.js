import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import {BsGithub, BsLinkedin} from "react-icons/bs"

function Footerish() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" fixed="bottom">
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
    )
}

export default Footerish;